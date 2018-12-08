console.log("hello world");

let firstValue = 50
const secondValue = 55

firstValue = 60

console.log(firstValue)


const simple={
    first : "255",
    second : "1024"
} 

const array = []

console.log(simple.first)
for(let i = 0;i < 20; i++)
{
    if (i%2 == 0) {
        array.push({
            number : i
        })
    } else {
        array.push(i)
    }
    
}


console.log(array)



array.forEach((value,index) => {
    // console.log(index,value)
    console.log(`${index,value}`)
});