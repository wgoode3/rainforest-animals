const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    species: {
        type: String,
        required: [true, "Species is required"],
        minlength: [2, "Species must be 2 characters or longer"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    }
}, {timestamps: true});

mongoose.model("Animal", AnimalSchema);