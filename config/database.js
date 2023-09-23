const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.DB_CON_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connection Successful'))
    .catch(err => console.error('DB Connection Error:', err.message));
};
