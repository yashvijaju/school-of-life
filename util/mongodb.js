import { MongoClient } from 'mongodb'

let uri = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_USER_PASSWORD+"@school-of-life.zyinz.mongodb.net/"+process.env.DB_COLLECTION+"?retryWrites=true&w=majority";
let dbName = process.env.DB_COLLECTION

let cachedClient = null
let cachedDb = null

if (!uri) {
  throw new Error(
    DB_USER="kavya"
    DB_USER_PASSWORD="bhoonation"
    DB_COLLECTION="Sequence"

    NEXTAUTH_URL=http://localhost:3000
  )
}

if (!dbName) {
  throw new Error(
    DB_USER="kavya"
    DB_USER_PASSWORD="bhoonation"
    DB_COLLECTION="Sequence"

    NEXTAUTH_URL=http://localhost:3000
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