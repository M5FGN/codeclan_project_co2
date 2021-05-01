const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter  = function(collection){
    
    const router = express.Router();
        //get many
    router.get('/', (req, res) => {
      collection.find()
      .toArray()
      .then((docs)=> res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });
    //get one
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });
//post one
  router.post('/', (req, res) =>{
    const users = req.body;
    collection
    .insertOne(users)
    .then((result)=> res.json(result.ops[0]))
    .catch((err)=>{
      console.error(err);
      res.status(500);
      res.json({status:500, error: err})
    });
    
  });

  // put one
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    delete updatedData._id;

    collection
    .updateOne({ _id: ObjectID(id) }, { $set: updatedData })
    .then(result => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

    //delete one
  router.delete('/:id', (req, res) =>{
    const id = req.params.id;
    collection
      .deleteOne({_id: ObjectID(id)})
      .then(result => res.json(result))
      .catch((err)=>{
        console.error(err);
        res.status(500);
        res.json({status:500, error: err})
      });
  })

  return router;
};

module.exports = createRouter;