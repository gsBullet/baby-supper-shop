const {
    MongoClient,
    ServerApiVersion
} = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const uri = "mongodb+srv://Bullet_BRUR:glmbrurict@cluster0.0fsdqn6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
});
client.connect(async (err) => {
    const db = client.db("baby_shop_db");
    const userColletction = db.collection("users");
    // get all data 
    // const allUser = await userColletction.find().toArray();

    // insert a signle/one new  data 
    // let data = {
    //     name : "abul kalam",
    //     address: "dhaka, bangladesh"
    // }
    // let insertData = await userColletction.insertOne(data);


    // insert many data 

    // let dataList = 
    // [
    //     {
    //         name: "abul",
    //         address: "dhaka, bangladesh"
    //     },
    //     {
    //         name: "abul hasan",
    //         address: "dhaka, bangladesh"
    //     },
    //     {
    //         name: "abul halim",
    //         address: "dhaka, bangladesh"
    //     }
    // ]
    // let insertData = await userColletction.insertMany(dataList);
    // console.log(insertData, dataList);


    // find data
    // let findData = await userColletction.find({
    //     name: "abul halim"
    //     // _id: ObjectId("63556a296e5efc31ddf06176")
    // }).toArray();

    // console.log(findData);


    // update data
    // let updateData = {
    //     name: "rashed",
    //     email: "rashed@gmail.com",
    //     address: "rangpur , bangladesh",
    //     phone: "0193646664"
    // }
    // let updateStatus = await userColletction.updateOne({
    //     _id: ObjectId("635603c3c68c06214784956d")
    // }, {
    //     $set: updateData
    // });

    // console.log(updateStatus);
    // console.log(updateData);


    
    // delete data
    // let deleteData = await userColletction.deleteOne({

    //     _id: ObjectId("635603b13a298926b5bcf5da")
    // });

    // console.log(deleteData);


    // perform actions on the collection object
    client.close();
});