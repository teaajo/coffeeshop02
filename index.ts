import express, { Application } from 'express';
import bodyParser from 'body-parser';
import sql from 'mssql/msnodesqlv8';
import * as tedious from 'tedious';
import { Configuration, OpenAIApi } from "openai";
import axios from 'axios';
import cors from 'cors';
import userTypeController from './src/controllers/UserTypeController'


(async () => {
  const app: Application = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
 
const config = {
driver: 'msnodesqlv8',
user: process.env.USER,
password: process.env.PASSWORD,
  server: process.env.SERVER, // You can use 'localhost\\instance' to connect to named instance
  database: process.env.DATABASE,
  port: process.env.PORT,
  dialect: 'mssql',
  dialectMode: tedious,
  options: {
    trustedConnection: true,
    
  }
}

  app.listen(3004, () => console.log('Server is up on port 3002'));

 
  await sql.connect(config).then( () => console.log ("Cpnnected!")).catch(err => {
    console.log(err) })
   .finally(() => sql.close())

app.use(cors());



app.post('/api/send-message', async (req, res) => {
  try {
    const userInput = req.body.message;

    const openAIApiUrl = 'https://api.openai.com/v1/chat/completions';
    const openAIApiHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_KEY}`,
    };
    const openAIApiBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: userInput,
        },
      ],
      temperature: 0.7,
    };

    const openAIResponse = await axios.post(openAIApiUrl, openAIApiBody, { headers: openAIApiHeaders });
    const chatResponse = openAIResponse.data.choices[0].message.content;

    res.json({ response: chatResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
});

   
  app.use('/usertype', userTypeController);

})();


