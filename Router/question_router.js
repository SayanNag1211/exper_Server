
const router=require('express').Router();
const QuestionController=require("../controllers/question_controller");
const AdminController=require('../controllers/Admin_Question_controler')

//CLIENT ROUTE
router.get('/api/getall',QuestionController.getclgname);
router.get('/api/matchid/:id',QuestionController.getIdmatchdata);
router.get('/api/getclgid',QuestionController.getclgid);
router.post('/api/addlink/:questionId/:courseId/:yearNumber/:clgYearName/:semName',QuestionController.addSubjectLink);
// router.get('/api/getanyid/:id',QuestionController.getAnyDatabyID);
// router.get('/api/getyeardata/:id/courses/:courseId/years/:yearId',QuestionController.getYearData);


//ADMIN ROUTE
router.post('/admin/postdata',AdminController.PostData);
router.post('/admin/AddData/:id/courses',AdminController.AddData);

module.exports=router;