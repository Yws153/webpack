module.exports = function(app) {
    app.use('/', require('./page1'));
    app.use('/login', require('./login'));
    app.use('/initnotes', require('./initnotes'));
    app.use('/addnotes', require('./addnotes'));
    app.use('/deletenotes', require('./delete'));
}
