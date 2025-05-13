{
// learning function
// normal function
// Arrow function

function add(num1: number, num2: number): number {
return num1 + num2;
}

add(2, 3);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object -->function --> method

const pooruser ={
name: 'shakib',
balance: 0,
addBalance(balance:number):string{
return `My Balance is: ${this.balance+balance}`
}
}

const arr :number [] =[1,4,6]
const newArray : number[] = arr.map((elem :number) : number => elem*elem)
}