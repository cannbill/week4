const {add, subtract, multiply, copyArray} = require("./node2");

let array = ["1", "2", "3"];

test("two numbers correctly add together", () => {
    expect (add(1, 2)).toBe(3);
});

test("two numbers correctly subtract", () => {
    expect (subtract(10, 2)).toBe(8);
});

test("two numbers correctly multiply", () => {
    expect (multiply(10, 2)).toBe(20);
});

test("return is a copy", () => {
    expect (copyArray(array)).not.toBe(array);
});