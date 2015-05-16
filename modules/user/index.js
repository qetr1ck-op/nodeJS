var localization = require('./spanish');

function User (name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    console.log(localization.Hello + ', ' + this.name);
};

console.log('User init');

exports.User = User;