module.exports = {
  database: 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB,
  secret: 'secret'
}

