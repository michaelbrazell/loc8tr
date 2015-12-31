/* GET 'about' page */
module.exports.about = function(req, res) { // does this need to be (req, res, next)?
	res.render('index', { title: 'About'});
};