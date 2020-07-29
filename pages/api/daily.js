import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    let doc = await req.db.collection('conseillers').findOne()
    // let doc = await req.db.collection('conseillers').find({}, { projection: { _id: 0, name: 1, prenom: 1 })
    console.log(doc);
    res.json(doc);


});

export default handler;

