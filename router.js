const Decision = require('./controllers/decisions');
// To call the decision contollers for relative path /api/decision

module.exports = function (app) {
  app.post('/newdonation', Decision.check);
  app.get('/donationlist',Decision.list);
  app.post('/deletedonation',Decision.remove);
}
