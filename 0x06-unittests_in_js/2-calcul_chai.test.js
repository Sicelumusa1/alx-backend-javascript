import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {

  describe('SUM operation type', () => {
    it('should return 6 when given 2.3 and 3.6', () => {
      const result = calculateNumber('SUM', 2.3, 3.6);
      expect(result).to.equal(6);
    });

    it('should return 5 when given 2.4 and 3.4', () => {
      const result = calculateNumber('SUM', 2.4, 3.4);
      expect(result).to.equal(5);;
    })

    it('should return 0 when given -2.3 and 2.3', () => {
      const result = calculateNumber('SUM', -2.3, 2.3);
      expect(result).to.equal(0);;
    })

    it('should return -4 when given -2.3 and -2.3', () => {
      const result = calculateNumber('SUM', -2.3, -2.3);
      expect(result).to.equal(-4);
    })

    it('should return 0 when given 0.4 and 0.4', () => {
      const result = calculateNumber('SUM', 0.4, 0.4);
      expect(result).to.equal(0);
    })  
  })

  describe('SUBTRACT operation type', () => {
    it('should return -2 when given 2.3 and 3.6', () => {
      const result = calculateNumber('SUBTRACT', 2.3, 3.6);
      expect(result).to.equal(-2);
    });

    it('should return 2 when given 5.4 and 3.4', () => {
      const result = calculateNumber('SUBTRACT', 5.4, 3.4);
      expect(result).to.equal(2);
    })

    it('should return -4 when given -2.3 and 2.3', () => {
      const result = calculateNumber('SUBTRACT', -2.3, 2.3);
      expect(result).to.equal(-4);
    })

    it('should return 0 when given -2.3 and -2.3', () => {
      const result = calculateNumber('SUBTRACT', -2.3, -2.3);
      expect(result).to.equal(0);
    })

    it('should return 0 when given 0.4 and 0.4', () => {
      const result = calculateNumber('SUBTRACT', 0.4, 0.4);
      expect(result).to.equal(0);
    })
  })

  describe('DIVIDE operation type', () => {
    it('should return -1 when given -2.3 and 2.3', () => {
      const result = calculateNumber('DIVIDE', -2.3, 2.3);
      expect(result).to.equal(-1);
    });

    it('should return "Error" when given 5.4 and 0.4', () => {
      const result = calculateNumber('DIVIDE', 5.4, 0.4);
      expect(result).to.equal('Error');
    })

    it('should return -4 when given -16.3 and 4.3', () => {
      const result = calculateNumber('DIVIDE', -16.3, 4.3);
      expect(result).to.equal(-4);
    })

    it('should return 0 when given 0.4 and -2.3', () => {
      const result = calculateNumber('DIVIDE', 0,4, -2.3);
      expect(result).to.equal(0);
    })

    it('should return 1 when given 5.4 and 5.4', () => {
      const result = calculateNumber('DIVIDE', 5.4, 5.4);
      expect(result).to.equal(1);
    })
  })
})
