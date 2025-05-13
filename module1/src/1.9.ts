{
    // type alias

    type Student = {
name : string,
age:number,
gender:string,
contact?:string,
address:string
    }

    const student1 : Student={
        name:'shakib',
        age:24,
        gender:'male',
        contact:'01871867376',
        address:'ctg'
    }


const student2 : {
name : string,
age:number,
gender:string,
address:string
    }={
        name:'Mir',
        age:24,
        gender:'male',
        address:'dhk'
    }

    const student3 : Student ={
        name:'Mir',
        age:24,
        gender:'male',
        address:'dhk'
    }


    type UserName = string
    type IsAdimn = boolean
    const UserName : string = 'nur'
    const IsAdimn : boolean = true
    
    type Add = (num1:number,num2:number) => number
    const add :Add = (num1,num2) => num1 + num2









}