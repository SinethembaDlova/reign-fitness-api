const mongoose = require("mongoose");
const  { v4 }  = require('uuid');

const Schema = mongoose.Schema;
 

const membershipSchema = new Schema({
    id: { type: String, unique: true, sparse: true, default: v4() },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
    id_number: { type: String, required: true },
    is_active: { type: Boolean, required: true, default: true },
    payment_type: { type: String, required: true },
    bank_account_number: { type: Number },
    contract_type: { type: String, required: true },
    amount: { type: Number, required: true}
});

const Membership = mongoose.model("Membership", membershipSchema);
module.exports = Membership;