import express from 'express';
import cors from 'cors';
import products from './data/products.js';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
// import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(cors());

// app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.use(errorHandler);
app.use(notFound);
app.listen(port, () => console.log(`Server running on ${port}`));
