const redis = require("redis");
const fs = require("fs");

async function start() {
    const client = redis.createClient({
        url: "redis://192.168.248.24:6378"
    });

    await client.connect();
    const subscriber = client.duplicate();
    await subscriber.connect();

    // const data = fs.readFileSync("test.json", "utf-8");
    // const objList = JSON.parse(datax);

    await subscriber.subscribe("test", (message) => { 
        console.log(message);
    });

    // for (const obj of objList) {
    //     await client.publish("test", JSON.stringify  (obj));
    //     await new Promise(resolve => setTimeout(resolve, 100000));
    // }
}

start().catch(console.error);