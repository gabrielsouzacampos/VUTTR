import mongoose from 'mongoose';

async function connect (){
    try {
        await mongoose.connect(process.env.DBURL || "YOUR URL", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Database connected");
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

export default connect;
