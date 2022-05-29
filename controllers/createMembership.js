const Membership = require("../schemas/membership");

module.exports = async (req, res) => {
    console.log(req.body);
    const { name, quantity, type, price } = req.body;
    try {
      const membership = await Membership.create({ name, quantity, type, price });
      res.status(201).json({ data: membership, message: "Membership successfully created" });
    } catch (error) {
        res.status(400).json({ error, message: "Failed to create membership." });
    }
  };