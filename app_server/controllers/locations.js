/* Get 'HOME' page */
module.exports.homelist = function(req, res) {
	res.render('locations-list', { title: 'Home' });
};

/* Get 'LOCATION INFO' Page */
module.exports.locationInfo = function(req, res) {
	res.render('locations-info', { title: 'Location Info' });
};

/* Get 'ADD NEW' Page */
module.exports.addReview = function(req, res) {
	res.render('location-review-form', { title: 'Add review' });
};