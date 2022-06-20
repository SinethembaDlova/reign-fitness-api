const { request } = require("express");
const Membership = require("../schemas/membership");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const membership = await Membership.findById(id);
    if (membership.length > 0) {
        res.status(200).json({ data: membership, message: "Successfully fetched membership." });
      } else {
        res.status(204).json({ data: [],  message: "There is no membership with the specified id available." });
      }
  } catch (error) {
    res.status(400).json({ error, message: "Failed to fetch membership." });
  }
};