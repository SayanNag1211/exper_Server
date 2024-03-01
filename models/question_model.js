const mongoose = require('mongoose');

// const caSchema=new mongoose.Schema({
//   caName:String,
//   linkUrl: String,
// });
const subjectSchema = new mongoose.Schema({
  subjectName: String,
  linkUrl: String,
});
const semSchema =new mongoose.Schema({
  semName: String,
  subjects : [subjectSchema],
}) 

const clgYearSchema = new mongoose.Schema({
  clgYearName: String,
  sem: [semSchema],
});

const yearSchema = new mongoose.Schema({
  yearNumber: Number,
  clgYear: [clgYearSchema],
});

const courseSchema = new mongoose.Schema({
  courseName: String,
  years: [yearSchema],
});

const QuestionData = new mongoose.Schema({
  clgName: String,
  courses: [courseSchema],
});

module.exports = mongoose.model('Question', QuestionData);
