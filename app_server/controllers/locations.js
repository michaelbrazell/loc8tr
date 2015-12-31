/* Get 'HOME/Location List' page */
module.exports.homelist = function(req, res) {
	res.render('locations-list', {
 		title: 'Locater - Find a place to work with wifi',
 		pageHeader: {
 			title: 'Locater',
 			strapline: 'Find places to work with wifi near you!'
 		},
 		locations: [{
 			name: 'Starcups',
 			address: '125 High Street, Reading, MA',
 			rating: 3,
 			facilities: ['Hot drinks', 'Nice toilets', 'Pleasant food'],
 			distance: '100m'
 		},{
 			name: 'MathWorks',
 			address: '3 Apple Hill Rd, Natick MA',
 			rating: 4,
 			facilities: ['Computers', 'Facilities'],
 			distance: '2103m'
 		},{
 			name: 'McDonalds',
 			address: '88 Parkton Ave, Worcester, MA',
 			rating: 2,
 			facilities: ['Happy Meals', 'Burgers', 'Nuggets', 'Coffee'],
 			distance: '54m'
 		}]
 	});
};

/* Get 'LOCATION INFO' Page */
module.exports.locationInfo = function(req, res) {
	res.render('locations-info', { title: 'Location Info' });
};

/* Get 'ADD NEW' Page */
module.exports.addReview = function(req, res) {
	res.render('location-review-form', { title: 'Add review' });
};