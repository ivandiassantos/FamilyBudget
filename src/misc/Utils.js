function isEmpty(str){
    return (!str || 0 === str.length);
}

function isEmailValid(email){
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

export default {
    isEmpty,
    isEmailValid,
}