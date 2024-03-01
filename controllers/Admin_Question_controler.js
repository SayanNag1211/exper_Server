const Question=require("../models/question_model")
module.exports={
    //Post data
    PostData: async (req,res) =>{
        try {
            const  question=new Question(req.body);

            const checkData=await Question.findOne({clgName:req.body.clgName});
            if(checkData){
                res.status(400).json({message:"Update!!"});
            }
            const saveData=await question.save();
            res.status(200).json(saveData);

        } catch (error) {

            res.status(500).json({messsge:error.masssge});
        }
    },
    //Post data of id match 
    AddData: async(req,res)=>{  
       const {id}= req.params;     
       try {
        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //     return res.status(400).json({ error: 'Invalid collegeId format.' });
        // }
        const exsitingClg= await  Question.findById(id);
        if(!exsitingClg){
            return res.status(404).json({ error: 'Collage not found!!' });
        }
        exsitingClg.courses.push(req.body);

        const AddingData= await exsitingClg.save();
        res.status(200).json(AddingData);
       } catch (e) {
            res.status(500).json({masssge:e.masssge});
        }
    },

    
};