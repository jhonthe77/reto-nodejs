import { user } from "../Db.js";

const ctrlEstudiantes = {};

ctrlEstudiantes.addstudent = async (req, res) => {
  const students = await user.findById(req.params.id);
  if (!students) {
    res.status(404);
  }
  res.json(students);
};



export default ctrlEstudiantes