var pg=require('pg');
var fs=require('fs');
var copyFrom=require('pg-copy-streams').to;
var client=new pg.Client({
    user:'openerp',
    host:'192.168.1.11',
    database:'commondb',
    password:'openerp',
    port:5432
});

pg.connect(function(err,client,done){
    var stream=client.query(copyFrom('cpoy shareathought to stdout'));
    stream.pipe(Process.stdout);
    stream.on('end',done);
    stream.on('error',done);
});
