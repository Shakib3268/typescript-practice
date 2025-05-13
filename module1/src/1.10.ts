{

    // union types

    // type FrontendDeveloper = 'fakibajDeveloper' | 'juniorDeveloper'
    // type FullstackDeveloper = 'frontendDeveloper' | 'expartdeveloper'
    type DeveloperType = FrontendDeveloper | FullstackDeveloper
    // const newDeveloper : FrontendDeveloper = 'juniorDeveloper'


    type User ={
        name:string,
        email?: string,
        gender : "male" | 'female',
        blood: 'o+' | 'a+' | 'ab+'
    }

    const user1 : User = {
     name :'shakib',
     gender:'male',
     blood:'a+'
    }


//   intersection
 type FrontendDeveloper = {
    skills : string[],
    designation1 : 'Frontend Developer'
 }

 type BackendDeveloper = {
    skills : string[],
    designation2: 'Backend Developer'
 }

 type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

 const fullstackDeveloper : FullstackDeveloper ={
 skills:['Html','css','js'],
 designation1:'Frontend Developer',
 designation2:'Backend Developer'
 }




}