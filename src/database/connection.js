const moongose = require('mongoose');

const connectDb = async ()=>{
    try {
        await moongose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster.sivduyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster`);
        console.log("BD conectada");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    connectDb,
}