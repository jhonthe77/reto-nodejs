import ctrlEstudiantes from '../controler/controller.js';

const express = require("express");
const router = express.Router();

router.get("/studen", ctrlEstudiantes.addstudent)



export default router