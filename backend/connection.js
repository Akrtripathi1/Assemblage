const mongoose = require('mongoose');

const url = 'mongodb+srv://akashtripathi:akash123@cluster0.mfqimag.mongodb.net/linkbuilder?retryWrites=true&w=majority';

// asynchronous - return Promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected successfully');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;