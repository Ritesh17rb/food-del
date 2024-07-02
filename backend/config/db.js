import mongoose from "mongoose";

export const connectDB = async () => {

    // 1XUakG3i6xrh2bIX
    // mongodb+srv://ritesh17rb:1XUakG3i6xrh2bIX@cluster0.kxb22f5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

    await mongoose.connect('mongodb+srv://ritesh17rb:1XUakG3i6xrh2bIX@cluster0.kxb22f5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("DB Connected"));

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.