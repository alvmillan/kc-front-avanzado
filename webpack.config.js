const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }
};