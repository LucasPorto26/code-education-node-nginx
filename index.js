const express = require('express'); 
const app = express();              
const port = 3000;                  

const config = {
    host: 'db',
    user: 'root',
    password: 'admin',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = 'INSERT INTO NODE_DB_USER(name) VALUES("LUCAS PORTO")'
connection.query(sql)


let query = 'SELECT * FROM NODE_DB_USER';
  
connection.query(query, (err, rows) => {
        if(err) throw err;
        app.get('/', (req, res) => {       
        
            res.send(`
            <h1>Full Cycle Rocks!</h1>
            <ol>
                ${!!rows.length ? rows.map(usuario => `<li>${usuario.name}</li>`).join('') : ''}
             </ol>
             `);      
                                                                
        });
        console.log(rows);
    });
connection.end()

app.listen(port, () => {           
    console.log(`Now listening on port ${port}`); 
});