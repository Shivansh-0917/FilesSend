require('dotenv').config();
require('dotenv').config({ path: 'ENV_FILENAME' });
const mongoose = require('mongoose');
function connectDB() {
  mongoose.connect(
    'mongodb+srv://shivansh:shivansh@cluster0.qhcgpgv.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const connection = mongoose.connection;
  connection
    .once('open', function () {
      console.log('MongoDB running');
    })
    .on('error', function (err) {
      console.log(err);
    });
}
module.exports = connectDB;
