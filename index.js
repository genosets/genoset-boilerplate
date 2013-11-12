var gql = require('gql');

module.exports = function(){
  var query = gql.query();
  query.needs(0);

  return query;
};