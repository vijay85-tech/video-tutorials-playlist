const mongoose = require("mongoose")
const shortid = require("shortid");
const Schema = mongoose.Schema;

const WishSchema = Schema({
    _id: { type: String, default: shortid.generate },
    wish:String
});

mongoose.model("wishes",WishSchema)