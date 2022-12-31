var utils = {
    hashSha256(message){
        var sha256 = require('js-sha256');
        var hash = sha256.create();
        console.log(sha256(message));
        return message;
    },

    ValidateEmail(email) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }
}

export default utils;