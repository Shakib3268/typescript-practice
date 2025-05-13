{
    // GENERIC TYPE

    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] = [1,2,3]
    const rollNumbers : GenericArray<number> = [1,2,3]

    // const mentors : string [] = ['mr.x','mr.y','mr.z']
    const mentors : GenericArray<string> = ['mr.x','mr.y','mr.z']

    // const boolArray : boolean[] = [true,false,true]
    const boolArray : GenericArray<boolean> = [true,false,true]

    const Add =(x:number,y:number) => x+y
    Add(30,20)

    const user : GenericArray<{name:string,age:number}> =[
        {
            name:'nur',
            age:40
        },
        {
            name:'jhankar',
            age:50
        }
    ]

    // generic tuple
    type GenericTuple <X,Y> = [X,Y]
    const manush: GenericTuple<string,string> =['MR.X','MR.Y']

    const UserWithID : GenericTuple<number,{name:string,email:string}> = [123,{name:'nur',email:'nur@gmail.com'}]
}