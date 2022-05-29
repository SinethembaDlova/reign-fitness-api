const Membership = require("../schemas/membership");

module.exports = async (req, res) => {
  try {
    const memberships = await Membership.find();
    if (memberships.length > 0) {
      res.status(200).json({ data: memberships, message: "Successfully fetched memberships." });
    } else {
      res.status(204).json({ data: [], message: "There are no memberships available" });
    }
  } catch (error) {
    res.status(400).json({ error, message: "Failed to fetch memberships." });
  }
};