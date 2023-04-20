import express from "express";
import {register,getAlluser,updateUser,deleteUser} from "../controllers/user.js";
const router = express.Router();

router.post("/new", register);
router.get("/users", getAlluser);
router
  .route("/:id")
  .delete(deleteUser)
  .put(updateUser);

export default router;