import test from "node:test";
import assert from "node:assert/strict";
import { generateMockTlsProof } from "./serve.mjs";

test("generateMockTlsProof builds TLSNotary structures accurately", () => {
  const url = "https://www.theguardian.com/football/2026/aug/13/arsenal-sign-rodri";
  const proof = generateMockTlsProof(url);
  
  assert.equal(proof.success, true);
  assert.equal(proof.proof_type, "TLSNotary");
  assert.equal(proof.version, "v0.1.0-alpha");
  assert.equal(proof.handshake.tls_version, "TLS 1.3");
  assert.equal(proof.handshake.server_name, "www.theguardian.com");
  assert.equal(proof.certificate.issued_to, "www.theguardian.com");
  assert.ok(proof.notary.signature.length > 30);
  assert.ok(proof.data_hash.length > 30);
});

test("generateMockTlsProof fallback behaves gracefully on empty url", () => {
  const proof = generateMockTlsProof("");
  assert.equal(proof.success, true);
  assert.equal(proof.handshake.server_name, "example.com");
  assert.ok(proof.data_hash.length > 30);
});
