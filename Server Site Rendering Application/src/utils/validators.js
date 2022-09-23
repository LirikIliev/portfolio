exports.registerValidator = (data) => {
    let regexp = /^\w+@\w+\.[a-zA-z]+$/g;
    let match = data.email.match(regexp);
    if (data.username && data.email && data.password && data.repeatPassword) {
        if (data.username.length >= 5 && data.email.length >= 10) {
            if (match) {
                return data;
            }
            throw { message: "Please fill your email address correctly!" }
        };
        throw { message: 'Username must be at least 5 symbols, email address must be at least 10 symbols!' };
    };
    throw { message: 'Please fill all the fields correctly!' };
};

exports.loginValidator = (data) => {
    if (data.email && data.password) {
        return data;
    }
    throw { message: 'Please fill all the fields correctly!' };
}