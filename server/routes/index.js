module.exports = function(app) {
    app.use('/', require('./page1'));
    app.use('/note', require('./note'))
}
