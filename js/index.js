class Fraction {
  constructor(numerator, denominator) {
    this._numerator = numerator;
    this._denominator = denominator;
  }

  reduction() {
    let n = this._numerator;
    let d = this._denominator;

    for (let i = this._numerator; i >= 2; i--) {
      if (this._numerator % i === 0 && this._denominator % i === 0)
        (n = this._numerator / i), (d = this._denominator / i);
    }

    if (n % 10 === 0 && d % 10 === 0) {
      do {
        n = n / 10;
        d = d / 10;
      } while (n % 10 === 0 && d % 10 === 0);
    }
    return new Fraction(n, d);
  }

  isInteger() {
    let temp = this._numerator % this._denominator;

    if (temp === 0) {
      return true;
    } else if (temp !== 0) {
      return false;
    }
  }

  static Addition(fraction1, fraction2) {
    let n;
    let d;

    let tmp1;
    let tmp2;
    if (fraction1._denominator === fraction2._denominator) {
      n = fraction1._numerator + fraction2._numerator;
      d = fraction1._denominator;
    } else {
      tmp1 = fraction1._numerator * fraction2._denominator;
      tmp2 = fraction2._numerator * fraction1._denominator;
      n = tmp1 + tmp2;
      d = fraction1._denominator * fraction2._denominator;

      for (let i = n; i >= 2; i--) {
        if (n % i === 0 && d % i === 0) {
          (n = n / i), (d = d / i);
        }
      }
    }
    return new Fraction(n, d);
  }

  static Substraction(fraction1, fraction2) {
    let n;
    let d;
    let tmp1;
    let tmp2;

    if (fraction1._denominator === fraction2._denominator) {
      n = fraction1._numerator - fraction2._numerator;
      d = fraction1._denominator;
    } else {
      tmp1 = fraction1._numerator * fraction2._denominator;
      tmp2 = fraction2._numerator * fraction1._denominator;
      n = tmp1 - tmp2;
      d = fraction1._denominator * fraction2._denominator;

      for (let i = n; i >= 2; i--) {
        if (n % i === 0 && d % i === 0) {
          (n = n / i), (d = d / i);
        }
      }
    }
    return new Fraction(n, d);
  }

  static Multiplication(fraction1, fraction2) {
    let n;
    let d;

    n = fraction1._numerator * fraction2._numerator;
    d = fraction1._denominator * fraction2._denominator;

    for (let i = n; i >= 2; i--) {
      if (n % i === 0 && d % i === 0) {
        (n = n / i), (d = d / i);
      }
    }
    return new Fraction(n, d);
  }

  static Division(fraction1, fraction2) {
    let n;
    let d;

    n = fraction1._numerator * fraction2._denominator;
    d = fraction1._denominator * fraction2._numerator;

    for (let i = n; i >= 2; i--) {
      if (n % i === 0 && d % i === 0) {
        (n = n / i), (d = d / i);
      }
    }
    return new Fraction(n, d);
  }
}

const fraction1 = new Fraction(2, 5);
const fraction2 = new Fraction(1, 5);
const fraction3 = new Fraction(3, 5);
let result = Fraction.Addition(fraction1, fraction2);

const fraction4 = new Fraction(3, 5);
const fraction5 = new Fraction(4, 5);
const fraction6 = new Fraction(7, 5);
let result2 = Fraction.Addition(fraction4, fraction5);

const fraction7 = new Fraction(2, 5);
const fraction8 = new Fraction(3, 7);
const fraction9 = new Fraction(29, 35);
let result3 = Fraction.Addition(fraction7, fraction8);

const fraction10 = new Fraction(1, 2);
const fraction11 = new Fraction(1, 8);
const fraction12 = new Fraction(5, 8);
let result4 = Fraction.Addition(fraction10, fraction11);

let result5 = Fraction.Substraction(fraction1, fraction2);
const fraction13 = new Fraction(1, 5);

let result6 = Fraction.Substraction(fraction4, fraction5);
const fraction14 = new Fraction(-1, 5);

const fraction15 = new Fraction(2, 5);
const fraction16 = new Fraction(1, 7);
const fraction17 = new Fraction(9, 35);
let result7 = Fraction.Substraction(fraction15, fraction16);

const fraction18 = new Fraction(5, 8);
const fraction19 = new Fraction(1, 2);
const fraction20 = new Fraction(1, 8);
let result8 = Fraction.Substraction(fraction18, fraction19);

const fraction21 = new Fraction(1, 4);
const fraction22 = new Fraction(3, 4);
const fraction23 = new Fraction(3, 16);
let result9 = Fraction.Multiplication(fraction21, fraction22);

const fraction24 = new Fraction(2, 3);
const fraction25 = new Fraction(1, 4);
const fraction26 = new Fraction(1, 6);
let result10 = Fraction.Multiplication(fraction24, fraction25);

const fraction27 = new Fraction(1, 3);
let result11 = Fraction.Division(fraction21, fraction22);

const fraction28 = new Fraction(8, 3);
let result12 = Fraction.Division(fraction24, fraction25);

const fraction29 = new Fraction(2, 5);
const fraction30 = new Fraction(2, 5);
let result13 = fraction29.reduction();

const fraction31 = new Fraction(24, 75);
const fraction32 = new Fraction(8, 25);
let result14 = fraction31.reduction();

const fraction33 = new Fraction(2, 7);
let result15 = fraction33.isInteger();

const fraction34 = new Fraction(4, 4);
let result16 = fraction34.isInteger();

const fraction35 = new Fraction(4, 1);
let result17 = fraction35.isInteger();

const fraction36 = new Fraction(10, 3);
let result18 = fraction36.isInteger();

//////////////////////////////

describe("Testing", () => {
  describe("Testing Addition", () => {
    it(`new Fraction(${fraction1._numerator},${fraction1._denominator}) + new Fraction(${fraction2._numerator},${fraction2._denominator}) = new Fraction(${fraction3._numerator},${fraction3._denominator})`, () => {
      assert.equal(result._numerator, fraction3._numerator);
      assert.equal(result._denominator, fraction3._denominator);
    });
    it(`new Fraction(${fraction4._numerator},${fraction4._denominator}) + new Fraction(${fraction5._numerator},${fraction5._denominator}) = new Fraction(${fraction6._numerator},${fraction6._denominator})`, () => {
      assert.equal(result2._numerator, fraction6._numerator);
      assert.equal(result2._denominator, fraction6._denominator);
    });
    it(`new Fraction(${fraction7._numerator},${fraction7._denominator}) + new Fraction(${fraction8._numerator},${fraction8._denominator}) = new Fraction(${fraction9._numerator},${fraction9._denominator})`, () => {
      assert.equal(result3._numerator, fraction9._numerator);
      assert.equal(result3._denominator, fraction9._denominator);
    });
    it(`new Fraction(${fraction10._numerator},${fraction10._denominator}) + new Fraction(${fraction11._numerator},${fraction11._denominator}) = new Fraction(${fraction12._numerator},${fraction12._denominator})`, () => {
      assert.equal(result4._numerator, fraction12._numerator);
      assert.equal(result4._denominator, fraction12._denominator);
    });
  });
  describe("Testing Substraction", () => {
    it(`new Fraction(${fraction1._numerator},${fraction1._denominator}) - new Fraction(${fraction2._numerator},${fraction2._denominator}) = new Fraction(${fraction13._numerator},${fraction13._denominator})`, () => {
      assert.equal(result5._numerator, fraction13._numerator);
      assert.equal(result5._denominator, fraction13._denominator);
    });
    it(`new Fraction(${fraction4._numerator},${fraction4._denominator}) - new Fraction(${fraction5._numerator},${fraction5._denominator}) = new Fraction(${fraction14._numerator},${fraction14._denominator})`, () => {
      assert.equal(result6._numerator, fraction14._numerator);
      assert.equal(result6._denominator, fraction14._denominator);
    });
    it(`new Fraction(${fraction15._numerator},${fraction15._denominator}) - new Fraction(${fraction16._numerator},${fraction16._denominator}) = new Fraction(${fraction17._numerator},${fraction17._denominator})`, () => {
      assert.equal(result7._numerator, fraction17._numerator);
      assert.equal(result7._denominator, fraction17._denominator);
    });
    it(`new Fraction(${fraction18._numerator},${fraction18._denominator}) - new Fraction(${fraction19._numerator},${fraction19._denominator}) = new Fraction(${fraction20._numerator},${fraction20._denominator})`, () => {
      assert.equal(result8._numerator, fraction20._numerator);
      assert.equal(result8._denominator, fraction20._denominator);
    });
  });
  describe("Testing Multiplication", () => {
    it(`new Fraction(${fraction21._numerator},${fraction21._denominator}) * new Fraction(${fraction22._numerator},${fraction22._denominator}) = new Fraction(${fraction23._numerator},${fraction23._denominator})`, () => {
      assert.equal(result9._numerator, fraction23._numerator);
      assert.equal(result9._denominator, fraction23._denominator);
    });
    it(`new Fraction(${fraction24._numerator},${fraction24._denominator}) * new Fraction(${fraction25._numerator},${fraction25._denominator}) = new Fraction(${fraction26._numerator},${fraction26._denominator})`, () => {
      assert.equal(result10._numerator, fraction26._numerator);
      assert.equal(result10._denominator, fraction26._denominator);
    });
  });
  describe("Testing Division", () => {
    it(`new Fraction(${fraction21._numerator},${fraction21._denominator}) : new Fraction(${fraction22._numerator},${fraction22._denominator}) = new Fraction(${fraction27._numerator},${fraction27._denominator})`, () => {
      assert.equal(result11._numerator, fraction27._numerator);
      assert.equal(result11._denominator, fraction27._denominator);
    });
    it(`new Fraction(${fraction24._numerator},${fraction24._denominator}) : new Fraction(${fraction25._numerator},${fraction25._denominator}) = new Fraction(${fraction28._numerator},${fraction28._denominator})`, () => {
      assert.equal(result12._numerator, fraction28._numerator);
      assert.equal(result12._denominator, fraction28._denominator);
    });
  });
  describe("Testing Reduction", () => {
    it(`new Fraction(${fraction29._numerator},${fraction29._denominator}) = new Fraction(${fraction30._numerator},${fraction30._denominator})`, () => {
      assert.equal(result13._numerator, fraction30._numerator);
      assert.equal(result13._denominator, fraction30._denominator);
    });
    it(`new Fraction(${fraction31._numerator},${fraction31._denominator}) = new Fraction(${fraction32._numerator},${fraction32._denominator})`, () => {
      assert.equal(result14._numerator, fraction32._numerator);
      assert.equal(result14._denominator, fraction32._denominator);
    });
  });
  describe("Testing isInteger", () => {
    it(`new Fraction(${fraction33._numerator},${fraction33._denominator}) = false`, () => {
      assert.equal(result15, false);
    });
    it(`new Fraction(${fraction34._numerator},${fraction34._denominator}) = true`, () => {
      assert.equal(result16, true);
    });
    it(`new Fraction(${fraction35._numerator},${fraction35._denominator}) = true`, () => {
      assert.equal(result17, true);
    });
    it(`new Fraction(${fraction36._numerator},${fraction36._denominator}) = false`, () => {
      assert.equal(result18, false);
    });
  });
});
