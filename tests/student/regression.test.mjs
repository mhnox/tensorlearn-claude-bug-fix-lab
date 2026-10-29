import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';

// Incident: viewer user-4 received claim-B, owned by user-42 (docs/contract.md).
// "user-4" is a prefix of "user-42"; ownership must be an exact match.
test('viewer whose ID is a prefix of the owner ID cannot see the claim', () => {
  const claimB = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };
  assert.equal(getClaim([claimB], 'user-4', 'claim-B'), null);
  assert.equal(getClaim([claimB], 'user-42', 'claim-B'), claimB);
});
