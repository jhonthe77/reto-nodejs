import express from 'express';
import mongoose  from 'mongoose';
import router from './routes/routes.studenn';

mongoose.connect('mongodb://127.0.0.1:27017/universida',{
}).then(db=> console.log('mongodb connect'))
.catch(err=> console.log('mongodb connect error2: ' + err.message))

const app =express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set('port',3000)
app.use("/api", router );

export default app