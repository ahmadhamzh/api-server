'use strict'
function handel404 (req, res,) {
    res.status(404).send('Page not found')
}

module.exports = handel404