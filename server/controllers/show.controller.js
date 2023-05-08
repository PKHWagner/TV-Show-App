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
  updateShow: (req, res) => {
    Show.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedShow => res.json(updatedShow))
        .catch(err => res.json(err));
  },

  // Delete
  deleteShow: (req, res) => {
    Show.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
  }

}