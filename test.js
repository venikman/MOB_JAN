const obj = require('./main')

// test("works", () => {
//     expect(fun.test(2)).toBe(2)
// })


const schedule = {
    week: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    range: []
}

const time = {
    day : 1,
    daytime : 1
}

test("check if it is open", () => {
    // expect(obj()).toBe("Open")

    expect(obj.isOpen(schedule, time)).toBe("Open");
})

// test("", () => {

// })

// test("", () => {

// })