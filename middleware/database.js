import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb://webUser:34Web75@asf-web.fr:27017/test?authSource=test&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('conseil');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;