import { User } from "../models/user.js";

export const register = async (req, res) => {
    try {
      const { name, email, phone,website } = req.body;
  
    //   let user = await User.findOne({ email });
  
    //   if (user) return next(new ErrorHandler("User Already Exist", 400));
  
    //   const hashedPassword = await bcrypt.hash(password, 10);
  
     const user = await User.create({ name, email, phone , website });
  
    //   sendCookie(user, res, "Registered Successfully", 201);
    res.status(200).json({
      success: true,
      message:"done",
    });
    } catch (error) {
      console.log(error)
    }
  };

  export const getAlluser = async (req, res, next) => {
  try {
   

    const users = await User.find();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
   
  }
};

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
    console.log(error)
    res.status(500).json({
        success: false,
        message: "Server error",
      });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

   
    await user.deleteOne();

    res.status(200).json({
      message: "Task Deleted!",
      success: true,
    });
  } catch (error) {
   
  }
};
