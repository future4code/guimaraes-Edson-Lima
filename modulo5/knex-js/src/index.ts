import connection from "./connection";
import app from "./app"
import { Request, Response } from "express";

// Ex1
//a) retorna dois arrays, sendo que um deles é informações do banco de dados

//b 

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)

    return result [0][0]
}

searchActor("Tony Ramos")
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
});

//c

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"
  `);

    const count = result[0][0].count;
    return count
}

countActors("female")
.then(result => {
  console.log("resultado é ", result)
})
.catch(err => {
  console.log(err)
});