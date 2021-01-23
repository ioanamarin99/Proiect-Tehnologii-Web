import express from 'express';
import bodyParser from 'body-parser';
import activitate from './routes/ActivitateRoute.js'
import activitate_utilizator from './routes/ActivitateUtilizatorRoute.js'
import feedback from './routes/FeedbackRoute.js'
import utilizator from './routes/UtilizatorRoute.js'
import cors from 'cors';

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', activitate);
app.use('/api', activitate_utilizator);
app.use('/api', feedback);
app.use('/api', utilizator);

let port = process.env.PORT || 8000;
app.listen(port);
console.log('API is runnning at ' + port);