var express = require('express');
var router = express.Router();

//接続情報を設定
const { MongoClient } = require("mongodb");
// 環境変数から接続文字列を取得
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

router.get('/', async(req, res) => {
  // データベース、コレクションを指定
  const database = client.db('notes');
  const notess = database.collection('notes');

  // idが1のドキュメントを取得
  const query = { id: 2 };
  const note = await notess.findOne(query);

  res.json(note);
})

module.exports = router;