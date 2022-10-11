import app from './app.js';

app.listen(app.get('port'),()=>{
console.log(`server listeners on port ${app.get('port')}`);
})