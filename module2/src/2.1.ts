{
    // type assertion
    let anything: any;
    anything='next web developement',
    (anything as string)

    const KgToGm = (value : string | number) : string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) *1000
            return `The converted value is : ${convertedValue}`
        }
        if(typeof value ==='number'){
            return value * 1000
        }
}
    const result1 = KgToGm(1000) as number
    const result2 = KgToGm('1000') as number
    console.log(result2)

    type CustomError = {
        message : string
    }
    try {
        
    } catch (error) {
        console.log((error as CustomError).message)
    }
}
