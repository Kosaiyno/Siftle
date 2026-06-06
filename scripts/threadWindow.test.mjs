import test from "node:test";
import assert from "node:assert/strict";
import { isWithinThreadHistoryWindow } from "./threadWindow.mjs";

test("thread window accepts candidates inside 48 hours", () => {
  assert.equal(
    isWithinThreadHistoryWindow("2026-06-06T12:00:00.000Z", "2026-06-04T12:30:00.000Z", 48),
    true
  );
});

test("thread window rejects candidates older than 48 hours", () => {
  assert.equal(
    isWithinThreadHistoryWindow("2026-06-06T12:00:00.000Z", "2026-06-04T11:59:00.000Z", 48),
    false
  );
});

test("thread window rejects future candidates", () => {
  assert.equal(
    isWithinThreadHistoryWindow("2026-06-06T12:00:00.000Z", "2026-06-06T12:01:00.000Z", 48),
    false
  );
});
