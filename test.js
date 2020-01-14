const obj = require('./main')

// test("works", () => {
//     expect(fun.test(2)).toBe(2)
// })

test("check if it is open", () => {
    // expect(obj()).toBe("Open")

    expect(obj.isOpen()).toBe("Open");
})

// test("", () => {

// })