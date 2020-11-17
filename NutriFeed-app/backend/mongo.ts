import * as mongoose from 'mongoose';

async function setMongo(): Promise<any> {
  const uriMongo = "mongodb+srv://user1:YoRB0lVwT8VeQ25M@nutrifeed.tjicq.mongodb.net/nutrifeed?retryWrites=true&w=majority";
  mongoose.Promise = global.Promise;
  mongoose.set('useCreateIndex', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useUnifiedTopology', true);
  await mongoose.connect(uriMongo);
  console.log("me he conectado a mongo");
}
export default setMongo;
