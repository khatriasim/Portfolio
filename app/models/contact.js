import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2, "Name must be at least 2 characters"],
        maxlength: [50, "Name must be less than 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        minlength: [5, "Email must be at least 5 characters"],
        maxlength: [100, "Email must be less than 100 characters"],
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        trim: true,
        minlength: [10, "Message must be at least 10 characters"],
        maxlength: [500, "Message must be less than 500 characters"]
    }
}, {
    timestamps: true
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;