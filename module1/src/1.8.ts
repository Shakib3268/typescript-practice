
// destructuring

const user ={
 id:345,
 name:{
    firstName:'shakib',
    middleName:'al',
    lastName:'nur'
 },
 contactNo:'019874884766',
 address:'uganda'
}

const {contactNo,name:{middleName}} = user

// array destructuring

const myFriends =['rachel','jaber','ansary','joe','monica','kabir']

const [,,bestFriend,...rest] = myFriends