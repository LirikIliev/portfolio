const Crypto = require("../model/Cripto.js");

exports.createCrypto = async (data) => Crypto.create(data);
exports.getAllCryptos = async () => Crypto.find({}).lean();
exports.getCurrentCryptos = async (id) => Crypto.findById(id).lean();
exports.editCryptos = async (id, data) => Crypto.findByIdAndUpdate(id, data);
exports.buyCryptos = async (id, userId) => Crypto.findByIdAndUpdate(id, { $push: { buyACrypto: userId } });
exports.deleteCryptos = async (id) => Crypto.findByIdAndDelete(id);
exports.searchCryptos = async (data) => Crypto.find({ $or: [{ name: data.name }, { payment: data.payment }] }).lean();