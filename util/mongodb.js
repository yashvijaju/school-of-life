import { MongoClient } from 'mongodb'

let uri = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_USER_PASSWORD+"@school-of-life.zyinz.mongodb.net/"+process.env.DB_COLLECTION+"?retryWrites=true&w=majority";
let dbName = process.env.DB_COLLECTION

let cachedClient = null
let cachedDb = null

if (!uri) {
  throw new Error(
    'Please define the MONGO_DB environment variable inside .env.local'
  )
}

if (!dbName) {
  throw new Error(
    'Please define the MONGO_DB environment variable inside .env.local'
  )
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = await client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}