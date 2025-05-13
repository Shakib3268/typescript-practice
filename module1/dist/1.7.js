"use strict";
{
    // spread operator
    // rest operator
    // learn spread operator
    const bros1 = ['azim', 'ashik', 'eram'];
    const bros2 = ['nahid', 'tonmoy', 'riaz'];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: 'Mezba',
        redux: 'mizan',
        dbms: 'nahid'
    };
    const mentors2 = {
        prisma: 'jahid',
        next: 'tonmoy',
        cloud: 'nur'
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('abul', 'kabul', 'ubul', 'bulbul');
}
