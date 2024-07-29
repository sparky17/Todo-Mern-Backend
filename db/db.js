import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb+srv://sparkyyyy9:mlZszWBQ6SfsJwi2@cluster0.lmrz9wy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Course_selling_Backend');
console.log("Mongo db is connected")

const TodoSchema =new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const TodoModel = mongoose.model('Todo', TodoSchema);

export {
    TodoModel as Todo
};