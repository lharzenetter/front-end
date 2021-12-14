(function (){
  'use strict';

  var util = require('util');

  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  module.exports = {
    catalogueUrl:  process.env.CATALOGUE_ENDPOINT || util.format("http://catalogue%s", domain),
    tagsUrl:       process.env.CATALOGUE_ENDPOINT + '/tags' || util.format("http://catalogue%s/tags", domain),
    cartsUrl:      process.env.CARTS_ENDPOINT + '/carts' || util.format("http://carts%s/carts", domain),
    ordersUrl:     process.env.ORDERS_ENDPOINT || util.format("http://orders%s", domain),
    customersUrl:  process.env.USERS_ENDPOINT + '/customers' || util.format("http://user%s/customers", domain),
    addressUrl:    process.env.USERS_ENDPOINT + '/addresses' || util.format("http://user%s/addresses", domain),
    cardsUrl:      process.env.USERS_ENDPOINT + '/cards' || util.format("http://user%s/cards", domain),
    loginUrl:      process.env.USERS_ENDPOINT + '/login' || util.format("http://user%s/login", domain),
    registerUrl:   process.env.USERS_ENDPOINT + '/register' || util.format("http://user%s/register", domain),
  };
}());
