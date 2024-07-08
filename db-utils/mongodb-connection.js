import { MongoClient } from "mongodb";


const dbName = "task";

const dbUsr = "ram9944";
const dbPassword = "kh9ggADaiKL6Fxpt";
const dbCluster = "cluster0.pmnrvh9.mongodb.net"

const cloudUrl = `mongodb+srv://${dbUsr}:${dbPassword}@${dbCluster}/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(cloudUrl);

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