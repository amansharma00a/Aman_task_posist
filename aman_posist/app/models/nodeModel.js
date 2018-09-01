'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Auto Increment giving problems
//var autoIncrement = require('mongoose-auto-increment');

//autoIncrement.initialize(connection);

var NodeSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  data: {
    salt: {
      type: String
    },
    hashed_password: { 
      type: String
    },
    name: {
      type: String
    },
    address: {
      type: String
    },
    mobile: {
      type: String
    },
    phone: {
      type: String
    },
    value: {
      type: Number
    }
  },
  nodeNumber:{
    type: Number // auto incremented
  },
  nodeId : {
    type: mongoose.Schema.Types.ObjectId,   // It'll be the same value as that of _id created by mongo.
    ref: 'Nodes'
  },
  refNodeId: {
    type: mongoose.Schema.Types.ObjectId,   
    ref: 'Nodes'
  },
  childNodeId: {
    type: mongoose.Schema.Types.ObjectId,   // for sub node
    ref: 'Nodes'
  },
  refChildNodeId: {
    type: mongoose.Schema.Types.ObjectId,   
    ref: 'Nodes'
  }
});

//NodeSchema.plugin(autoIncrement.plugin, { model: 'Nodes', field: 'nodeNumber'});

module.exports = mongoose.model('Nodes', NodeSchema);