const dns = require('dns');

const checkInternet = (req, res, next) => {
    dns.resolve('google.com', (err) => {
        if (err) {
            return res.status(503).json({
                success: false,
                message: 'No internet connection'
            });
        }
        next();
    });
};
module.exports = {
    checkInternet
}