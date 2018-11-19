const express = require( 'express' );
const router = express.Router();

router.get( '/', ( req, res )=>{
    console.log( '/songs GET hit' );
}); // end GET

router.post( '/', ( req, res )=>{
    console.log( '/songs POST hit:', req.body );
}); // end POST