const Question=require("../models/question_model")
const mongoose = require('mongoose');

module.exports={
    //get All data
    getclgname: async (req,res) =>{
        try {
            const allClgnames=await Question.find();
            res.status(200).json(allClgnames);
        } catch (error) {
            res.status(500).json({masssge:error.masssge});
        }
    },
    //get only ID and clgName
    getclgid: async (req,res) =>{
        try {
            const allClgnames=await Question.find({},"id clgName");
            res.status(200).json(allClgnames);
        } catch (error) {
            res.status(500).json({masssge:error.masssge});
        }
    },
    //Match id and return data
    getIdmatchdata: async(req,res)=>{
        const {id}=req.params;
        try {
            const matchID= await Question.findById(id);
            if(matchID){
                res.status(200).json(matchID);
            }
            else{
                res.status(404).json({masssge:"Data Not Found!"});
            }
        } catch (error) {
            res.status(500).json({masssge:error.masssge});
        }
    },

    //Add SubjectName and Link
    addSubjectLink:async(req,res)=>{
            try {
                const { questionId, courseId, yearNumber, clgYearName, semName } = req.params;
                const { subjectName, linkUrl } = req.body;
            
                const updatedQuestion = await Question.findOneAndUpdate(
                  { '_id': questionId, 'courses._id': courseId, 'courses.years.yearNumber': yearNumber, 'courses.years.clgYear.clgYearName': clgYearName, 'courses.years.clgYear.sem.semName': semName },
                  {
                    $push: {
                      'courses.$.years.$[y].clgYear.$[c].sem.$[s].subjects': {
                        subjectName,
                        linkUrl
                      }
                    }
                  },
                  { arrayFilters: [{ 'y.yearNumber': yearNumber }, { 'c.clgYearName': clgYearName }, { 's.semName': semName }], new: true }
                );
            
                res.json(updatedQuestion);
          } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
          }
    }
};