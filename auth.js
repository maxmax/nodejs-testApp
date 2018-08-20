const auth = require('basic-auth');

const admins = { dev: { password: 'qq112233' } };

module.exports = function (request, response, next) {
  const user = auth(request);
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="example"');
    return response.status(401).send();
  }
  return next();
};
