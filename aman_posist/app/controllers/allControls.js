'use strict';
var Node = require('../models/nodeModel');
var mongoose = require('mongoose');

exports.render_home = function(req, res) {
  res.render('index')
};

exports.create_a_node = function(req, res) {
  var new_node = new Node(req.body);
  new_node.save(function(err, Node) {
    if (err)
      res.send(err);
    res.json(Node);
  });
};

exports.find_node = function(req, res) {
  Node.findById(req.params.nodeNum, function(err, Node) {
    if (err)
      res.send(err);
    res.json(Node);
  });
};

exports.verify_owner = function(req, res) {
  Node.findById(req.params.nodeNum, function(err, ans) {
    if (err)
      res.send(err);
    res.json({ status: ans});
  });
};

exports.attach_node = function(req, res) {
 var new_node = new Node(req.body);
  new_node.save(function(err, Node) {
    if (err)
      res.send(err);
    res.json(Node);
  });
};

exports.transfer_ownership = function(req, res) {
      // Get Params
      // get old node parent
      // get new parent and add info
};
exports.find_longest_chain = function(req, res) {
      //Traverse the series O(n)
      // Or we can make a variable and store in each node for num of children. O(1)
};