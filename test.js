// Initial spec
describe("pow", function () {

  it("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8);
  });

});

// 1. The first variant – add one more assert into the same it:
describe("pow", function () {

  it("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
    // The principal difference between 1. and 2. is that when assert triggers an error, the it block immediately terminates. So, in the first variant if the first assert fails, then we’ll never see the result of the second assert.
  });

});

// 2. The second – make two tests:
describe("pow", function () {

  it("2 raised to power 3 is 8", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("3 raised to power 4 is 81", function () {
    assert.equal(pow(3, 4), 81);
  });

});

// 3. More Use Cases (Generated in For Loop)

describe("pow", function () {

  // before(() => alert("Testing started – before all tests"));
  // after(() => alert("Testing finished – after all tests"));

  // beforeEach(() => alert("Before a test – enter a test"));
  // afterEach(() => alert("After a test – exit a test"));

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 9; x++) {
    makeTest(x)
  }
});

// 4. Nested describe
describe("pow", function () {

  describe("raises x to power 3", function () {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... more tests to follow here, both describe and it can be added
});

// 5. Extending the spec
describe("pow", function () {

  // ...

  it("for negative n the result is NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });

});