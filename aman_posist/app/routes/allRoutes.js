'use strict';
module.exports = function(app) {
  var allControls = require('../controllers/allControls');

app.route('/find/:nodeNum')
	.get(allControls.find_node);
app.route('/')
	.get(allControls.render_home);
// We will bring the params as in the Schema Nodes. hashed password is calculated using salt and crypto.
// For First New Node
app.route('/new')
	.post(allControls.create_a_node);

// For Subsequent Nodes
app.route('/new/:parentNode')
	.post(allControls.attach_node);

app.route('/owner/verify')
	.post(allControls.verify_owner);

app.route('/transfer')
	.post(allControls.transfer_ownership);

app.route('/utils/findlongest')
	.get(allControls.find_longest_chain);
};