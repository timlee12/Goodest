const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('strictQuery', true);
const mongoURI = 'mongodb+srv://timlee12:Poopoo12@timcluster.zi9snco.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Goodest'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    profile: {
      profilePic: {
        type: { data: Buffer, contentType: String },
        default: null
      },
      animalType: { type: String, default: null },
      description: { type: String, default: null },
      feed: {
        image: { data: Buffer, contentType: String },
        caption: { type: String, default: null },
        comments: { type: String, default: null },
        likes: { type: Number, default: 0 }
      }
    }
  })

  const User = mongoose.model('user', userSchema);

  module.exports = User;