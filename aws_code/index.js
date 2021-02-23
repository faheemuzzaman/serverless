const sql = require('mssql')

var dbConfig = {
    user: 'sa',
    password: 'Asdbnm123',
    server: '118.103.233.199',
    database: 'TestFunc',
    options: {
        encrypt: false,
        enableArithAbort: true
    }
};

exports.handler =  (event, context, callback) => {
    sql.connect(dbConfig).then(() => {
        return sql.query`EXEC procValues`
    }).then(result => {
        callback(null,result);
        sql.close();
    }).catch(err => {
        callback(null,"Error While getting data from database: " + err)
    })
};