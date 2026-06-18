import test from "node:test";
import assert from "node:assert/strict";
import { extendShelbyBlobsIfNeeded } from "./serve.mjs";

test("extendShelbyBlobsIfNeeded does nothing if Shelby archive is not configured", async () => {
  let listCalled = false;

  await extendShelbyBlobsIfNeeded({
    isShelbyArchiveConfigured: () => false,
    listShelbyArchiveFiles: async () => {
      listCalled = true;
      return [];
    }
  });

  assert.equal(listCalled, false);
});

test("extendShelbyBlobsIfNeeded filters blobs correctly and extends only expiring ones", async () => {
  const nowMicros = Date.now() * 1000;
  const hourInMicros = 3600 * 1000 * 1000;

  const mockBlobs = [
    {
      blob_name: "siftle/feeds/2026-06-17/crypto/expiring.json",
      expirationMicros: nowMicros + 10 * hourInMicros // Expiring in 10 hours (< 36 hours)
    },
    {
      blob_name: "siftle/feeds/2026-06-17/sports/fresh.json",
      expirationMicros: nowMicros + 45 * hourInMicros // Expiring in 45 hours (> 36 hours)
    },
    {
      blob_name: "siftle/feeds/2026-06-17/tech/expired.json",
      expirationMicros: nowMicros - 1 * hourInMicros // Expired
    },
    {
      blob_name: "siftle/feeds/2026-06-17/politics/no-expiration.json",
      expirationMicros: null // No expiration info
    }
  ];

  const extendedBlobs = [];
  const listFilesMock = async () => mockBlobs;
  const extendBlobMock = async (blobName, newExpirationMicros) => {
    extendedBlobs.push({ blobName, newExpirationMicros });
    return "0xmocktxhash";
  };

  await extendShelbyBlobsIfNeeded({
    isShelbyArchiveConfigured: () => true,
    listShelbyArchiveFiles: listFilesMock,
    extendShelbyBlobExpiration: extendBlobMock
  });

  // Should only extend the one expiring in 10 hours
  assert.equal(extendedBlobs.length, 1);
  assert.equal(extendedBlobs[0].blobName, "siftle/feeds/2026-06-17/crypto/expiring.json");
  // Verification that new expiration is ~47 hours in the future
  const expectedNewExpiration = Date.now() * 1000 + 47 * hourInMicros;
  const diff = Math.abs(extendedBlobs[0].newExpirationMicros - expectedNewExpiration);
  // Allow 5 seconds clock drift during test execution
  assert.ok(diff < 5 * 1000 * 1000);
});

test("extendShelbyBlobsIfNeeded handles individual blob extension failures gracefully", async () => {
  const nowMicros = Date.now() * 1000;
  const hourInMicros = 3600 * 1000 * 1000;

  const mockBlobs = [
    {
      blob_name: "siftle/feeds/2026-06-17/category/failing.json",
      expirationMicros: nowMicros + 5 * hourInMicros
    },
    {
      blob_name: "siftle/feeds/2026-06-17/category/succeeding.json",
      expirationMicros: nowMicros + 8 * hourInMicros
    }
  ];

  const extendedBlobs = [];
  const listFilesMock = async () => mockBlobs;
  const extendBlobMock = async (blobName, newExpirationMicros) => {
    if (blobName.includes("failing")) {
      throw new Error("Simulated Aptos transaction error");
    }
    extendedBlobs.push(blobName);
    return "0xmocktxhash";
  };

  // The routine should catch the error on the first blob, log it, and continue to the second blob
  await extendShelbyBlobsIfNeeded({
    isShelbyArchiveConfigured: () => true,
    listShelbyArchiveFiles: listFilesMock,
    extendShelbyBlobExpiration: extendBlobMock
  });

  assert.equal(extendedBlobs.length, 1);
  assert.equal(extendedBlobs[0], "siftle/feeds/2026-06-17/category/succeeding.json");
});
