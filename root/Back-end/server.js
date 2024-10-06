const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3003;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://sudhirpld2020:valarmathi@teacher.ntuu0.mongodb.net/Teacher?retryWrites=true&w=majority&appName=Teacher', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log("Connected to MongoDB");
});

const Attendance = require('./models/attendance');


app.post('/api/attendance', async (req, res) => {
    try {
      const attendanceData = req.body;
      const savedData = await Attendance.insertMany(attendanceData);
      res.status(200).json(savedData);
    } catch (error) {
      console.error('Error saving attendance:', error);
      res.status(400).json({ message: 'Error saving attendance', error });
    }
  });
  
app.get('/api/attendance',async(req,res)=>{
    try{
        const data=await Attendance.find();
        res.status(200).json(data);
    }catch(error){
        res.status(500).send(error);
    }
})

app.get('/', (req, res) => {
    res.send("Hello");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
