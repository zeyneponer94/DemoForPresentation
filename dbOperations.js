module.exports = {
    
    
    
    getAccountObj : function(req, res){
        


        var pg = require('pg');
        
        const conString = 'postgres://ptqlegohnfvlxi:f6b6c4a902c65be534369c69f3f7553d781c804dc49c1c63bec84ebf6c53dd45@ec2-54-243-239-66.compute-1.amazonaws.com:5432/d7dp1tjaohdugb';
        
        var client = new pg.Client(conString);
        client.connect();
        
        
        var query = client.query("select * from salesforce.Account ");
        
        query.on('row', function(row, result) {
                 result.addRow(row);
         });
        
        query.on("end", function (result) {
                 client.end();
                 res.writeHead(200, {'Content-Type': 'text/plain'});
                 res.write(JSON.stringify(result.rows, null, "    ") + "\n");
                 res.end();
        });
        

        
        
    }

};



