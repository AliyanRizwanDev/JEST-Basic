const sum = require("./sum");
const intCheck = require("./intCheck");
const fetchdata = require("./fetchdata");
const fetchPromise = require("./fetchPromise");

test("Add sum 1+2", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Add sum 1+5", () => {
  expect(sum(1, 5)).toBe(6);
});

test("Object Assignment", () => {
  const obj = { a: 1, b: 2 };
  obj["c"] = 5;
  expect(obj).toEqual({ a: 1, b: 2, c: 5 });
});

test("Null is False", () => {
  const n = null;
  // its also false const n = 0;

  expect(n).toBeFalsy();
});

test("Null is False", () => {
  const n = null;
  // its also false const n = 0;

  expect(n).toBeFalsy();
});

test("1 is True", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

test("Check Int throws error for non-number", () => {
  expect(() => intCheck("2")).toThrow("It's not a number");
});

test("Check Int does not throw error for number", () => {
  expect(() => intCheck(2)).not.toThrow();
});

test("The Data is Peanut", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchdata(callback);
});
test("This data is peanut butter", () => {
  return expect(fetchPromise()).resolves.toBe("peanut butter");
});

// test("This data is if it fails", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

test("The data is peanut", async () => {
  const data = await fetchPromise();
  expect(data).toBe("peanut butter");
});
test("mock implementation of a basic function", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(1)).toBe(43);
  expect(mock).toHaveBeenCalledWith(1);
});

test("spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };
  
  const spy = jest.spyOn(video, "play");
  video.play();
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
