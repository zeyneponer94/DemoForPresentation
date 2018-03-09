module.exports = {
    
    
    
    getAccountObj : function(req, res){
        


        var pg = require('pg');
        
        const conString = 'postgres://xrixuxjugjxffa:3c2db3bcbebc146efe766de349812478e6b5a7bc5e2aeca57ce84e2268d75a65@ec2-54-235-66-24.compute-1.amazonaws.com:5432/ddi1k00lq5nup1';
        
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



