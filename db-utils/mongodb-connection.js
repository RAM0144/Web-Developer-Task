import { MongoClient } from "mongodb";

const dbUrl = "localhost:27017";

const dbName = "task";

const localUrl = `mongodb://${dbUrl}`;
const client = new MongoClient(localUrl);

const db = client.db(dbName);

const connectToDb = async () => {
    try {
        await client.connect();
        console.log("DB Connected Successfully!");
    } catch (error) {
        console.log("Error Connecting the database", error);
        process.exit(1);
    }
};

export { db, client };

export default connectToDb;