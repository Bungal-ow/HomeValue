require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const Controller = require('./controllers.js');

const bodyParser = require('body-parser');

const port = 4000;

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/home/:zipcode', Controller.getHomeByZipcode);
app.post('/api/home', Controller.addHomeValue);
app.patch('/api/home/:id', Controller.updateHomeValue);
app.delete('/api/home/:id', Controller.deleteHomeValue);

app.listen(port, () => console.log(`Example app listening on port  ${port}!`))





// const app = express();

// const port = 4444;

// app.use(morgan('dev'));

// app.use(bodyParser({ extended: true }));

// app.use(express.static(path.resolve(__dirname, '../public/')));

// app.get('/exampleHomeSummary/', (req, res) => {
//   // const { address, zipCode } = req.query;
//   // console.log('The query address is:', address);
//   // console.log('The query zipcode is:', zipCode);
//   model.getExampleAddressesData(req.query, (error, result) => {
//     if (error) {
//       res.end();
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`listening on port ${port}...`);
// });
