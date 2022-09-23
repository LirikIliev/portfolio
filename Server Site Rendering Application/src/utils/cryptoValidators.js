exports.createCryptoValidator = (userId, data) => {
    let imageRegexp = /^https:\/\/|http:\/\//g;
    let match = data.image.match(imageRegexp);
    if (data.name && data.image && data.price && data.description && data.payment) {
        if (Number(data.price) > 0) {
            if (data.description.length > 10) {
                if (data.payment === 'crypto-wallet' || data.payment === 'credit-card' || data.payment === 'debit-card' || data.payment === 'paypal') {
                    if (match) {
                        data.owner = userId;
                        return data;
                    }
                    throw { message: "The image must be link!" }
                }
                throw { message: "The payment must be one of 'crypto-wallet', 'credit-card', 'debit-card', 'paypal'" }
            }
            throw { message: 'The description must be at least 10 symbols!' }
        };
        throw { message: 'The price must be positive!' }
    };
    throw { message: 'Please fill all the fields correctly!' }
}