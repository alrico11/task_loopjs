let increment,
    batas,
    logs
const objLoop = {
    forLoop: function forLoops(value, value1, value2) {
        increment = value
        batas = value1
        logs = value2
        for (value; value < value1; value++) {
            console.log(value2, value)
        }
    },
    forLoop1: function forLoops(value, value1, value2) {
        increment = value
        batas = value1
        logs = value2
        for (value; value < value1; value++) {
            console.log(value2, value)
        }
    },
    whileLoop: function whileLoops(value, value1, value2) {
        increment = value
        batas = value1
        logs = value2
        while (value <= value1) {
            console.log(value2, value)
            value++
        }
    },
    whileLoop2: function whileLoops(value, value1, value2) {
        increment = value
        batas = value1
        logs = value2
        while (value <= value1) {
            console.log(value2, value)
            value++
        }
    },
    dowhileLoop: function dowhileLoops(value, value1, value2) {
        increment = value
        batas = value1
        logs = value2
        do {
            console.log(value2, value)
            value++
        } while (value <= value1);
    },
    dowhileLoop2: function dowhileLoops(value, value1, value2) {
        increment = value
        batas = value1
        logs = value2
        do {
            console.log(value2, value)
            value++
        } while (value <= value1);
    }
}
objLoop.forLoop(0, 10, `INI FOR LOOP Pertama`)
objLoop.forLoop1(1, 5, "INI FOR LOOP Kedua")
objLoop.whileLoop(0, 10, "Ini WHILE LOOP Pertama")
objLoop.whileLoop2(1, 5, "Ini WHILE LOOP Kedua")
objLoop.dowhileLoop(5, 6, "INI DO WHILE Pertama")
objLoop.dowhileLoop2(0, 7, "INI DO WHILE Kedua")

let isi

const objLoop2 = {
    arrLoop: [],
    pushArr: function (value, value1, isiArr) {
        isi = isiArr
        objLoop2.arrLoop.push(isi)
        console.log(objLoop2.arrLoop[0])
    },
    callAllArray: function (value) {
        increment = value
        for (value; value < this.arrLoop[0].length; value++) {
            console.log(this.arrLoop[0][value])
        }
    }
}
objLoop2.pushArr(0, 10, ["Makan", "Tahu", "Sama", "Tempe"])
objLoop2.callAllArray(0)