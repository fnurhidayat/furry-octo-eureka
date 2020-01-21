var create = require('./create.js');
var getUser = require('./read.js')
var args = process.argv.slice(2);
var method = args[0];

switch(method) {

  case 'create_user':
    let name = args[1]
    let email = args[2];
    let password = args[3];
    let password_confirmation = args[4];
    // create()
    create({
      name : name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    })
    break;
    
  case 'get_user':
    let key = args[1]
    getUser(key);
    break;

  default:
    console.log('Unknown action!');
}


