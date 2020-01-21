function getUser(key) {
    let user = require('./data/users.json')
    var result = 0;
    for (i = 0; i < user.length; i++) {
        if(user[i].id == key) {
            result = user[key];
        } else {
            console.log('User id wrong or not exist')
        }
    }
    console.log(result);
}


module.exports = getUser;
