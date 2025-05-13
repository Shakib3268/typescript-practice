{
    // spread operator
    // rest operator


    // learn spread operator

    const bros1 : string[] = ['azim','ashik','eram']
    const bros2 : string[] = ['nahid','tonmoy','riaz']
    bros1.push(...bros2);

    const mentors1 ={
        typescript:'Mezba',
        redux:'mizan',
        dbms:'nahid'
    }

    const mentors2 ={
        prisma:'jahid',
        next:'tonmoy',
        cloud:'nur'
    }

    const mentorsList ={
        ...mentors1,
        ...mentors2
    }

    // learn rest operator

    const greetFriends = (...friends:string[]) =>{
        friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
    }
    greetFriends('abul','kabul','ubul','bulbul')
}