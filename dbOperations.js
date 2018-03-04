module.exports = {
    
    
    
    dbChanges : function(req, res){
        


        var pg = require('pg');
        
        const conString = 'postgres://jxqrpxtlufhgae:72b38c25ce8801b4a1006a38325f0e4cb80235a8d8ac0e959c576796ce216ba1@ec2-54-221-207-184.compute-1.amazonaws.com:5432/d963jopd97sas6';
        
        var client = new pg.Client(conString);
        client.connect();
        
        
        var query = client.query("select * from salesforce.Account ");
        
        query.on('row', function(row) {
                 query = client.query("insert into demo(id, name) " + "values ("+row.id+",'"+row.name+"')");
         });
        
        res.sendStatus(200);

        
        
    }

};



