/* Get 'HOME/Location List' page */
module.exports.homelist = function(req, res) {
	res.render('locations-list', {
 		title: 'Locater - Find a place to work with wifi',
 		pageHeader: {
 			title: 'Locater',
 			strapline: 'Find places to work with wifi near you!'
 		},
 		sidebar: "Looking for wifi and a seat?  Locater helps you find places o work when out and about.  Perhaps with coffee, cake or a pint?  Let Locater help you find the place you're looking for.",
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
	res.render('locations-info', { 
		title: 'Starcups - Locater',
		pageHeader: { title: 'Starcups'	},
		sidebar: {
			context: 'is on Locater because it has accessible wifi and space to sit down with your laptop and get some work done.',
			callToAction: 'If you\'ve been here and you like it, please leave a review.'
		},
		location: {
			name: 'Starcups',
			address: '125 High Street, Reading, MA',
 			rating: 3,
 			facilities: ['Hot drinks', 'Nice toilets', 'Pleasant food'],
 			coords: {lat: 42.262593, lng: -71.802293},
 			openingTimes: [{
 				days: 'Monday - Friday',
 				opening: '7:00am',
 				closing: '7:00pm',
 				closed: false
 			},{
 				days: 'Saturday',
 				opening: '8:00am',
 				closing: '5:00pm',
 				closed: false
 			},{
 				days: 'Sunday',
 				closed: true
 			}],
 			reviews: [{
 				author: 'Simon Holmes',
 				rating: 5,
 				timestamp: '16 July 2013',
 				reviewText: 'What a great place, I really can\'t say enough things!'
 			},{
 				author: 'Mike Jones',
 				rating: 2,
 				timestamp: '15 May 2015',
 				reviewText: 'This place was just okay.'
 			}]
		}
	});
};

/* Get 'ADD NEW' Page */
module.exports.addReview = function(req, res) {
	res.render('location-review-form', { 
		title: 'Review Starcups on Locater' ,
		pageHeader: { title: 'Review Starcups'}
	});
};