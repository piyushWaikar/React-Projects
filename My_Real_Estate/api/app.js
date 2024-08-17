import express from 'express'

import postRouter from './routes/post.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/posts',postRouter);

console.log("hello");

app.use('/api/auth',authRouter)


app.listen(3000 , ()=>{
    console.log('server is running at 3000');
    
});