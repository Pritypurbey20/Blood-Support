const Users = require('../model/UserSchema');


// To retrieve all posts:
const all_users = async (req,res) => {
  try {
    const user = await Users.find();
    res.json(user)
  }
  catch{
    res.json({message:error})
  }
};

//To create a new user:

const create_user = async (req,res) => {
  const user = new Users({
    Name : req.body.Name,
    Email: req.body.Email,
    BloodGroup: req.body.BloodGroup,
    AvailableStatus: req.body.AvailableStatus
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser)
  }
  catch(error){
    res.status(400).send(error)
  }
}

module.exports = {
  all_users,
  create_user
}


