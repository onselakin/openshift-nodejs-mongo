const   app = require('./app')

const server = app.listen(8080, '0.0.0.0', () => {
    console.log(`Express is running on port ${server.address().port}`)
})