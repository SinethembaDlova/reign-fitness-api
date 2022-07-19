const Membership = require("../schemas/membership");

module.exports = async (req, res) => {
    const {  
        first_name, 
        last_name, 
        id_number, 
        is_active, 
        payment_type,
        bank_account_number,
        contract_type,
        amount,
        email,
        phone_number
    } = req.body;
    try {
      const membership = await Membership.create({ 
        first_name, 
        last_name, 
        id_number, 
        is_active, 
        payment_type,
        bank_account_number, 
        contract_type,
        amount,
        email,
        phone_number });
      res.status(201).json({ data: membership, message: "Membership successfully created" });
    } catch (error) {
        res.status(400).json({ error, message: "Failed to create membership." });
    }
  };