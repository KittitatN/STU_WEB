const array = [1,2,3,4,5,6,7,8,9,10]
let newArray = null

newArray = array.map(value => value * 2)

console.log(newArray)


newArray = array.filter((value) => {
    if(value%2 !== 0){
        return value;
    }
})

console.log(newArray)


const summation = array.reduce((previousValue,currentValue) => previousValue + currentValue,100)


console.log(summation)

const chain = array.filter(value => value%2 === 0 ? value : null).map(value => value*10).reduce((preVal,curVal) => preVal + curVal)

console.log(chain)