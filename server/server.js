// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
//uses
app.use( express.static( 'server/public/' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
//globals
const port = process.env.PORT || 5000;
// spin up server
app.listen( port, ( req, res )=>{
    console.log( 'server up on:', port );
});