const mongoose=require('mongoose');

const attendanceSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    present:{
        type: Boolean,
        required: true
    },
    regno:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;