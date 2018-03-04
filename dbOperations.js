module.exports = {
    
    
    
    dbChanges : function(req, res){
        


        var pg = require('pg');
        
        const conString = 'postgres://ascqbycixfknbp:fb89f2f061fb950f7ed6f8f4a436469fb53aded2994b5f000578c56ec7049744@ec2-54-235-90-200.compute-1.amazonaws.com:5432/d9a9kfm279m1k7';
        
        var client = new pg.Client(conString);
        client.connect();
        
        
        var query = client.query("select * from salesforce.Account ");
        
        query.on('row', function(row) {
                 query = client.query("insert into demo(id, name) " + "values ("+row.id+",'"+row.name+"')");
         });
        
        res.sendStatus(200);

        
        
    }

};



