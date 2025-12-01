var express = require('express');
var router = express.Router();

//接独情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://***:***@cluster0.r4dinrx.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async(requestAnimationFrame, res) => {
  // データベース、コレクションを指定
  const database = client.db('notes');
  const notess = database.collection('notes');

  // idが1のドキュメントを取得
  const query = { id: 2 };
  const note = await notess.findOne(query);

  res.json(note);
})

module.exports = router;