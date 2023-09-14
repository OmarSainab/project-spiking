const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://group4:<group4password>@spiking.noak2uy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

async function main() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
      await client.connect();
  
      const database = client.db('habits'); 

      const databaseList = await client.db().admin().listDatabases();

      console.log('Databases:');
      databaseList.databases.forEach(db => {
          console.log(`- ${db.name}`);
      });

  
  
    } finally {
      await client.close();
    }
  }
  
  main().catch(console.error);
