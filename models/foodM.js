import mongoose from 'mongoose';


const foodSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    calories: {
        type: Number,
        trim: true,
        require: true,
        maxlength: 32,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        require: true
    }


})

const Food = mongoose.model('Food', foodSchema);


export default Food;