import assert from 'assert';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', () => {
  it('should return 6 when given 2.3 and 3.6', () => {
    const result = calculateNumber(2.3, 3.6);
    assert.strictEqual(result, 6);
  });

  it('should return 5 when given 2.4 and 3.4', () => {
    const result = calculateNumber(2.4, 3.4);
    assert.strictEqual(result, 5);
  })

  it('should return 0 when given -2.3 and 2.3', () => {
    const result = calculateNumber(-2.3, 2.3);
    assert.strictEqual(result, 0);
  })

  it('should return -4 when given -2.3 and -2.3', () => {
    const result = calculateNumber(-2.3, -2.3);
    assert.strictEqual(result, -4);
  })

  it('should return 0 when given 0.4 and 0.4', () => {
    const result = calculateNumber(0.4, 0.4);
    assert.strictEqual(result, 0);
  })
})
