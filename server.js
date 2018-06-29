var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./database/mongoose');
var {DoctorDetails}=require('./models/doctordetails');

var app=express();
const port=process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/doctorlist', (req, res) => {
  var doctorlist = new DoctorDetails({
    name: req.body.name,
    gender:req.body.gender,
    field:req.body.field
  });

  doctorlist.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/doctorlist', (req, res) => {
  DoctorDetails.find().then((doctorlist) => {
    res.send({doctorlist});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(port, () => {
  console.log(`Starting on port ${port}`);
});

module.exports = {app};
