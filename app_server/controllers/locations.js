/* Get 'HOME' page */
module.exports.homelist = function(req, res) {
	res.render('index', { title: 'Home' });
};

/* Get 'LOCATION INFO' Page */
module.exports.locationInfo = function(req, res) {
	res.render('index', { title: 'Location Info' });
};

/* Get 'ADD NEW' Page */
module.exports.addReview = function(req, res) {
	res.render('index', { title: 'Add review' });
};