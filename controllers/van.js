var vans = require('../models/van'); 
 
// List of all Flight

exports.van_list = async function(req, res) { 
    try{ 
        thevans = await vans.find(); 
        res.send(thevans); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific Flight. 
exports.van_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Van detail: ' + req.params.id); 
}; 
 
// Handle Flight create on POST. 
exports.van_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Van create POST'); 
}; 
 
// Handle Flight delete form on DELETE. 
exports.van_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Van delete DELETE ' + req.params.id); 
}; 
 
// Handle Flight update form on PUT. 
exports.van_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Van update PUT' + req.params.id); 
};

exports.van_view_all_Page = async function(req, res) { 
    try{ 
        thevans = await vans.find(); 
        res.render('van', { title: 'van Search Results', results: thevans }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.van_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new vans(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    console.log('the first'+req.body.vanType)
    console.log('the second'+ req.body.vanPrice)
    document.vanType = req.body.vanType;
    console.log(document.vanType)
    document.vanPrice = req.body.vanPrice; 
    document.vanColor = req.body.vanColor; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};