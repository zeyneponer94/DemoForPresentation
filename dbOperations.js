module.exports = {
    
    
    
    dbChanges : function(req, res){
        


        var pg = require('pg');
        
        const conString = 'postgres://krndjquidnhbml:c34245278e28a697031fd314dd590e189c8967dd10428e946fd0327a356e13fa@ec2-54-163-234-99.compute-1.amazonaws.com:5432/dcf0qi2krf1gls';
        
        var client = new pg.Client(conString);
        client.connect();
        
        
        var query = client.query("select (id,name) from salesforce.Account ");
        
        query.on('row', function(row) {
                 query = client.query("insert into demo(id, name) " + "values ('"+row.id+"','"+row.name+"')");
         });
        
        res.sendStatus(200);

        
        
    }

};



