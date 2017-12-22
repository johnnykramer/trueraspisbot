const { Users, usersMethods, Weeks, weeksMethods } = require('../models');

function userExist(name) {
    return new Promise((resolve, reject) => {
        usersMethods.get(name)
            .then((user) =>{
                if (user && user.username) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
    });
}

module.exports = {
    userExist,
}
