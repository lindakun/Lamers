
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};

exports.form = function(req, res){
    //console.log('.........');
    res.render('user/add_user',{});
}