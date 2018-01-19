const passport = require('passport');
const axios = require('axios');

module.exports = {
  setUser: ( req, res, next ) => {
    if ( req.user && !req.session.user ) {
      req.session.user = req.user;
    }
    res.redirect('/');
  },

  sendUserToClient: ( req, res, next ) => {
    if ( !req.session.user ) {
      res.status(403).send();
    } else {
      res.status(200).send( req.session.user );
    }
  },

  logout: (req, res) => {
    req.logOut();
    // axios.get('/v2/logout/returnTo=LOGOUT_URL')
    res.redirect('http://localhost:3000')
  }

  // logout: ( req, res, next ) => {
  //   req.session.destroy();
  //   res.status(200).send();
  // }
};