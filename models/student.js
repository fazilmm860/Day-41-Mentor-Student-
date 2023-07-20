const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }

});
const student = mongoose.model("student", studentSchema);
module.exports = student;