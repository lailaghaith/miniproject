var homeController = require('./controllers/indexcontroller');
var profileController = require('./controllers/profileController');
var portfolioController = require('./controllers/portfolioController');


module.exports = function(app, passport) {

   app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage'), user : req.user }); 
    });
    app.get('/', homeController.getallusers);
    app.post('/profile', profileController.createnewwork);
    //app.post('/profileScreenshot',profileController.createnewpics);
    app.get('/work/:id', portfolioController.previewwork);

    app.get('/register', function(req, res) {
        res.render('register.ejs', { message: req.flash('signupMessage'), user : req.user });
    });
    app.post('/register', passport.authenticate('local-signup', {
        successRedirect : '/profile',
        failureRedirect : '/register', 
        failureFlash : true
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', 
        failureRedirect : '/login',
        failureFlash : true 
    }));
    app.get('/profile', isLoggedIn , profileController.getallworks)
    app.get('/portfolio/:id', portfolioController.getallworks);
    app.get('/view-work/:id', portfolioController.previewwork);

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) { 
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}