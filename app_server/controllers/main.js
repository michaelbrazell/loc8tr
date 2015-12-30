/* GET home page */
module.exports.index = function(req, res) { // does this need to be (req, res, next)?
	res.render('index', { title: 'Express'});
};