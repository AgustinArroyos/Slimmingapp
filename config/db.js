import mongoose from "mongoose";




const conectarDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://agustin1:agustin1@cluster0.ewnpm5v.mongodb.net/APPA?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`Connect in ${url}`)
    }
    catch (e) {
        console.log(`error : ${e.message}`);
        process.exit(1)
    }
};

export default conectarDB;