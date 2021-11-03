'use strict'
function handel500(err, req, res) {
    res.status(500).send({
        error : 500,
        message :err.message
    })
    
}

module.exports = handel500