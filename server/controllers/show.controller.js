const Show = require("../models/show.model");

module.exports = {
  // Create
  createShow: (req, res) => {
    Show.create(req.body)
        .then(newShow => res.json(newShow))
        .catch(err => res.status(400).json(err));
  },

  // Read
  getAllShows: (req, res) => {
    Show.find()
        .then(allShows => res.json(allShows))
        .catch(err => res.json(err));
  },

  // Read One
  getOneShow: (req, res) => {
    Show.findById(req.params.id)
        .then(oneShow => res.json(oneShow))
        .catch(err => res.json(err));
  },
  
  // Update

  // Delete
}