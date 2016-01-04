/* GET 'about' page */
module.exports.about = function(req, res) { // does this need to be (req, res, next)?
	res.render('generic-text', 
		{ title: 'About Locater',
		content: 'Lorem ipsum dolor sit amet, eu eos habeo ipsum adipiscing, vis no summo primis sensibus. Vim persecuti reprimique ex, ne odio singulis sed. Dicit elaboraret ullamcorper has in. Mel ad inani omnium, ea sea diam volumus interpretaris. \n\n Ut vim meliore prodesset quaerendum. Id probo nullam aperiam ius, quo dolor viderer fierent ei. Ornatus torquatos qui ea, at eum gubergren consetetur. Vis simul audire definiebas an, vix scripta liberavisse et. Inani errem ut vel, te per vocent fierent convenire, alii vivendo disputationi cu ius.  \n\nTe tollit scripserit contentiones sed, et dicam pertinacia mel. Id mei tale solum interpretaris. Rebum iudico viderer te sit. Ne commodo percipit complectitur pro. Eros melius civibus et vim, vix ne habemus commune contentiones.'
	});
};