import { User } from "../models/user.js";

//register new user
export const register = async (req, res) => {
  try {
    const { name, email, phone, website } = req.body;
    const user = await User.create({ name, email, phone, website });
    res.status(200).json({
      success: true,
      message: "done",
    });
  } catch (error) {
    console.log(error);
  }
};



//get all the registerd user
export const getAlluser = async (req, res, next) => {
  try {
    const users = await User.find();

    res( users)
  
     
    
  } catch (error) {}
};

//update user
export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { name, email, phone, website } = req.body;

    // update the fields
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.website = website;

    await user.save();

    res.status(200).json({
      success: true,
      message: "user Updated!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//delete user
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    await user.deleteOne();

    res.status(200).json({
      message: "Task Deleted!",
      success: true,
    });
  } catch (error) {}
};
