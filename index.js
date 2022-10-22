import categoryRoutes from './routes/categoryRoutes.js';
import foodRoutes from './routes/foodRoutes.js';
import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(express.json())
conectarDB();




app.use('/api/category', categoryRoutes)

app.use('/api/food', foodRoutes)





const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
    console.log(`servidor listening on port ${8000}`);

});


