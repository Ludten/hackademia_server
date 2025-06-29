const express = require('express')
const sequelize = require('./sequelize')
const cors = require('cors')
require('./Models/index')
const app = express()
const path = require('path')
const { reqLogger } = require('./logger')
const port = 3000
app.use(express.json())

app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(reqLogger);

app.use('/api', require('./routes/indexRoutes'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


async function testDb() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testDb();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
