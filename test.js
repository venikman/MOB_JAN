const obj = require('./main')

test("returns Closed according to schedule", () => {
    const schedule = {
        monday: {open: 9, close: 17}
    }
    
    const time = {
        day : "monday",
        daytime : 2
    }

    expect(obj.helper(schedule, time)).toBe("Closed")
})

test("returns Open according to schedule", () => {
    const schedule = {
        monday: {open: 9, close: 17}
    }
    
    const time = {
        day : "monday",
        daytime : 10
    }

    expect(obj.helper(schedule, time)).toBe("Open")
})

// test("returns Open FOR NOW", () => {
//     expect(obj.isOpen()).toBe("Closed")
// })

test("initialize", () => {
    const schedule = {
        monday: {open: 9, close: 17}
    }

    expect(obj.init(schedule, () => {return new Date()})).not.toBe(undefined);
    expect(obj.init(schedule, () => {return new Date()}).isOpen).not.toBe(undefined);
    expect(obj.init(schedule, () => {return new Date()}).getNextOpen).not.toBe(undefined);
})

test("test isOpen", () => {
    const schedule = {
        monday: {open: 9, close: 17}
    }
    const getTime = () => {return new Date()}
    const initObj = obj.init(schedule, getTime)

    expect(initObj.isOpen()).toBe("Closed")
})




// test("", () => {

// }), ()