var utils = {
    hashSha256(message){
        var sha256 = require('js-sha256');
        var hash = sha256.create();
        console.log(sha256(message));
        return message;
    },

    ValidatePassword(password) {
        var validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if(password.match(validRegex)){
            return true;
        } else {
            return false;
        }
    },

    ValidatePhone(phone) {
        var validRegex = /^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/;
        if(phone.match(validRegex)){
            return true;
        } else {
            return false;
        }
    },

    ValidateFullName(name) {
        var validRegex = /^[àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\sA-Za-z]{3,50}$/;
        if(name.match(validRegex)){
            return true;
        } else {
            return false;
        }
    },

    ValidateText(text) {
        var validRegex = /^[:"'.,!?-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\sA-Za-z]{8,}$/;
        if(text.match(validRegex)){
            return true;
        } else {
            return false;
        }
    },

    ValidateName(name) {
        var validRegex = /^[àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœA-Za-z]{3,15}$/;
        if(name.match(validRegex)){
            return true;
        } else {
            return false;
        }
    },

    ValidateEmail(email) {
        var validRegex = /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (email.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }
}

export default utils;