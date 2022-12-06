const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const home = path.join(__dirname,'../public')

app.use(express.static(home));


app.get('/', (req, res) => {
  // res.send('Hello World');
  res.send()
})


// console.log(__dirname)

// console.log(path.join(__dirname,'../public'))


app.get('/api', (req, res) => {
    res.json([
        {
        id:1,
        naem:'shubhan'
    },
    {
        id:2,
        naem:'sagar'
    },
    {
        id:3,
        naem:'abc'
    },
    {
        id:4,
        naem:'efg'
    }
 ])
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mysql'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)

// })

// connection.end()