import express from 'express';
import contactController from '../Controller/contactController.js';
import contactValidate from "../Validation/contactValidation.js";
import validate from '../Middlewares/validateMiddleware.js';
const router = express.Router();


router.post('/contact',validate(contactValidate), contactController);




export default router;