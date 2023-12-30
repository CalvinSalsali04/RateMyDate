import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json( { limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true }));
app.use(cors()); //need to have this above the routes otherwise i get error

app.use('/posts', postRoutes);


const CONNECTION_URL = 'mongodb+srv://calpal5950:11bbVr0wjd7rDXO6@cluster0.u7hbbys.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))
;





