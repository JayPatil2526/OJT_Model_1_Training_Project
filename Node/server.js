const http = require("http");
const mongo = require("mongodb").MongoClient;

const server = http.createServer((req, res) => {
  const url = "mongodb://127.0.0.1:27017";

  mongo.connect(url, (err, client) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Failed to connect to database" }));
      return;
    }

    const db = client.db("wap");
    const collection = db.collection("wap"); // collection named 'wap'

    collection.find({}).toArray((error, data) => {
      if (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Error fetching data" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
      }                                                        

      client.close();
    });
  });
});

server.listen(2526, () => {
  console.log("Server running at http://localhost:2526");
});
