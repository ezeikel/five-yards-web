const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), '0.0.0.0', () => {
  console.log('Five Yards Express Server running..');
  console.log(`PORT => ${server.address().port}`);
  console.log(`ENVIRONMENT => ${app.get('env')}`);
});