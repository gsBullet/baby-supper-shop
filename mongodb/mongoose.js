const mongoose = require('mongoose');
const ObjectId = require('mongoose').ObjectId;
main().catch(err => console.log(err));

const userSchema = mongoose.Schema({
    username: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true
    },
    phone: {
        type: "string"
    }
});

const userModel = mongoose.model('userModel', userSchema);

async function main() {
    await mongoose.connect('mongodb+srv://Bullet_BRUR:glmbrurict@cluster0.0fsdqn6.mongodb.net/baby_shop_db?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
    console.log('mongoose connect');


    try {
        // insert data 
        // let user = new userModel({
        //     username: "hasan",
        //     email: "hasan@gmail.com",
        //     phone: "016546798978"
        // })
        // let data = await user.save();
        // console.log(data);


        // find data 

        // let user = await userModel.findOne({
        //     _id: "635753386302b119fa74349a"
        // });
        // console.log(user);


        // update data 

        // let user = await userModel.updateOne({
        //     _id: '635753386302b119fa74349a'
        // },{
        //     username: "test"
        // })
        // console.log(user);


        // delete data 

        let user = await userModel.deleteOne({
            _id: '635753386302b119fa74349a'
        })
        console.log(user);





    } catch (error) {
        console.log(error.message);
    }


}