import mysql from 'mysql2'

const connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Rahul@1999',
    database:'Booking_Tickets'
}).promise()

export async function readcinema(){
    const output = await connection.query("select *from cinema")
    return output[0]
}

export async function insertcinema(name, email, numberoftickets, date){
    const output = await connection.query("insert into cinema(name,email,numberoftickets,date) values('"+name+"','"+email+"','"+numberoftickets+"','"+date+"')")
    // return output[0]
}

// const result = await readcinema()
// console.log(result)