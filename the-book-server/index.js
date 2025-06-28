const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.ljhlpfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let booksCollection; // declare globally

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('theBooks'); // your DB name
    booksCollection = database.collection('books');

    // Ping to confirm connection
    await database.command({ ping: 1 });
    console.log("Pinged your deployment successfully");

    // Now your app can start listening to requests
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

run().catch(console.dir);

// Route to get 20 books
app.get('/books', async (req, res) => {
  try {
    const books = await booksCollection.find().limit(20).toArray();
    res.send(books);
  } catch (err) {
    res.status(500).send({ message: 'Failed to fetch books', error: err });
  }
});


// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});
