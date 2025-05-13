{
    // ternary operartor || optional chaining || nullish coalescing operator 
    const age : number = 15

    if (age >= 18){
        console.log('adult')
    }else{
        console.log('not adult')
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log({isAdult})

    // nullish coleascing
    //  null / undefined ---> decision making

    const IsAutenticate = ''
    const result1 = IsAutenticate ?? 'Guest'
    const resul2 = IsAutenticate ?IsAutenticate : 'Guest'
    console.log({result1},{resul2})


    type User ={
        name: string,
        address :{
            city: string;
            road: string;
            presentaddress: string;
            permanentaddress ? : string
        }
    }

    const user : User ={
        name : 'shakib',
        address:{
            city:'ctg',
            road:'awasome',
            presentaddress:'rasulpur'
        }
    }
    const permanentaddress = user ?.address?.permanentaddress ?? 'no parmanent address'
    console.log({permanentaddress})

}