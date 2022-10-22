import mongoose from 'mongoose';

const foodSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    }

})