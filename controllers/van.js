var vans = require('../models/van'); 
 
// List of all vans

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
 
// for a specific vans. 
exports.van_detail = async function(req, res) { 
    console.log("detail" + req.params.id)
    try {
        result = await vans.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    } 
}; 
 
// Handle vans create on POST. 
exports.van_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Van create POST'); 
}; 
 
// Handle vans delete form on DELETE. 
exports.van_delete = async function(req, res) { 
        console.log("delete "  + req.params.id) 
        try { 
            result = await vans.findByIdAndDelete( req.params.id) 
            console.log("Removed " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": Error deleting ${err}}`); 
        } 
    };  
 
 
// Handle vans update form on PUT. 
exports.van_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await vans.findById(req.params.id)
            // Do updates of properties        
        if (req.body.vanType)
            toUpdate.vanType = req.body.vanType;
        if (req.body.vanPrice)
            toUpdate.vanPrice = req.body.vanPrice;
        if (req.body.vanColor)
            toUpdate.vanColor = req.body.vanColor;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

// Handle a show one view with id specified by query 
exports.van_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await vans.findById( req.query.id) 
        res.render('vandetail',  
{ title: 'Van Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}