import express from 'express';
import cors from 'cors';

// EXPORTA O APP PARA UTILIZAR NOS OUTROS ARQUIVOS
export const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// SERVIDOR ESCUTANDO NA PORTA 3003
app.listen(3003, () => console.log('Server rodando.....'));
