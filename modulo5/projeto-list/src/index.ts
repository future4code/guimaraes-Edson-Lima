import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";


const app = express();
app.use(express.json());
app.use(cors());




//     criando usuário
const createUser = async (
    id: number,
    name: string,
    nickname: string,
    email: string
  ) => {
    await connection
      .insert({
        id: id,
        name: name,
        nickname: nickname,
        email: email
      })
      .into("Users")
  }
  
  app.post('/user', async (req: Request, res: Response) => {
    try {
      const { name, nickname, email } = req.body
  
      if (!name && !nickname && !email) {
        throw new Error("Please, fill in the fiels!")
      }
  
      await createUser(
        req.body.id,
        req.body.name,
        req.body.nickname,
        req.body.email
      )
      res.status(200).send({
        message: "User created successfully!"
      });
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  })
  

//     pengando usuário por id

app.get("/users/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const userById = await connection.raw(`
SELECT * FROM UserToDoList WHERE id = '${id}'
`);
    res.status(200).send(userById[0][0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

//      editando usuário 

app.put("/user/:id", async (req: Request, res: Response) => {
    try {
  
      const { name, nickname } = req.body
  
      if (!name || !nickname) {
        throw new Error("Fill in all fields!")
      }
  
      await connection("Users")
        .update({
          name: req.body.name,
          nickname: req.body.nickname
        })
        .where({ id: req.params.id })
      res.status(200).send("User successfully edited!")
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });

