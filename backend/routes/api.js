const express = require('express');

const User = require('../models/User'),
  Doc = require('../models/Doc');

const router = new express.Router();

router.get('/getMyInfo', (req, res) => {
  res.json({
    name: req.user.name,
    email: req.user.email
  })
});

router.get('/getDocuments', (req, res) => {
  let response = [];
  User.findById(req.user._id).populate('documents').exec().then((user) => {
    for (var doc of user.documents) {
      response.push({
        preview: doc.text.slice(0, 100),
        title: doc.title,
        _id: doc._id
      })
    }
    res.json(response)
  })
})

router.post('/createNewDocument', (req, res) => {
  let doc = new Doc();
  doc.save().then((doc) => {
    req.user.documents.push(doc._id);
    req.user.save();
    res.json({ 'id': doc._id })
  })
})


module.exports = router;