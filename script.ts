function ph(value: any) {
    console.log(`#h# ${value}`)
}

ph('lab 3: typescript')

/// TASK 1
ph('Task 1')

function createPhoneNumber(numbers: number[]): string {

    const failStr = "fail"
    if (numbers.length !== 10) return failStr

    let str: string = ""
    for (let i of numbers) {
        if (i > 9 || i < 0) return failStr
        str += i
    }
    const strArr = str.split('')
    strArr.splice(0, 0, '(')
    strArr.splice(4, 0, ')')
    strArr.splice(5, 0, ' ')
    strArr.splice(9, 0, '-')

    return strArr.join('')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 2, 5, 6, 7, 6, 8, 8, 9, 9]))
console.log(createPhoneNumber([12, 2, 5, 6, 7, 6, 8, 8, 9, 9]))
console.log(createPhoneNumber([2, 5, 6, 7, 6, 8, 8, 9, 9]))

/// TASK 2
ph('Task 2')

class Challenge {
    static solution(number: number): number {
        let summary: number = 0
        if (number < 0) return summary

        for (let i: number = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) summary += i
        }
        return summary
    }
}

console.log(Challenge.solution(10))
console.log(Challenge.solution(30))
console.log(Challenge.solution(-10))


/// TASK 3
ph('Task 3')

function moveArr(numbers: number[], moves: number) {
    if (moves < 0) return [0]

    const length = numbers.length

    for (let i: number = 0; i < k; i++) {
        let prev = numbers[0]

        for (let j: number = length - 1; j >= 0; j--) {
            prev = numbers[j]
            let nextIndex = (j - 1 < 0) ? length - 1 : j - 1
            numbers[j] = numbers[nextIndex]
            numbers[nextIndex] = prev
        }
        prev = numbers[length - 1]
        numbers[length - 1] = numbers[0]
        numbers[0] = prev

        console.log(`${i + 1}: ${numbers}`)
    }


    return numbers
}

let k = 3
let example = [1, 2, 3, 4, 5, 6, 7]

console.log(`result: [${moveArr(example, k)}]`)

/// TASK 4
ph('Task 4')

const num1 = [1, 6, 9, 12]
const num2 = [2, 3, 7, 10]

function median(num1, num2): number {

    //merge

    let sorted: number[] = [], indexA:number = 0, indexB:number = 0
    while(indexA < num1.length && indexB < num2.length) {
        if(num1[indexA] > num2[indexB]) {
            sorted.push(num2[indexB++])
        } else {
            sorted.push(num1[indexA++])
        }
    }

    //last push

    if(indexB < num2.length) {
        sorted.push(...num2.slice(indexB))
    } else {
        sorted.push(...num1.slice(indexA))
    }
    console.log(`sorted: ${sorted}`)

    //median

    if(sorted.length % 2 === 0) {
        return (sorted[(sorted.length/2)-1]+sorted[(sorted.length/2)])/2
    } else {
        return sorted[(sorted.length-1)/2]
    }
}

console.log(`result: ${median(num1, num2)}`)

ph('end')
