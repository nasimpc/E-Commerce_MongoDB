const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callBack) => {
  MongoClient.connect('mongodb+srv://nasim:kapsuc-mukMik-1dittu@cluster0.9b4haud.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
      console.log('Connected');
      _db = client.db();
      callBack();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};
const getDB = () => {

  if (_db) {
    return _db;
  }
  throw 'no database found!';

}
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
