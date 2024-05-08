const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ravi22pcs5151:ravijangir741@collegewebsite.jy23gva.mongodb.net/college?retryWrites=true&w=majority&appName=CollegeWebsite');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
