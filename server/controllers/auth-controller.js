const User = require("../models/user-model");
const bcrypt = require("bcryptjs");




// *------------------------
    // HOME LOGIC
// *------------------------
const home = async(req, res) => {

    try {
        res.status(200).send('THIS IS MY HOME PAGE!!!');
    } catch (error) {
        console.log(error);
    }
};
 

// *------------------------
    // SIGNUP LOGIC
// *------------------------

// 1. Get the Registration Data: Retrieve user data (username, email, password).
// 2. Check if email already registered
// 3. Hash Password
// 4. Create User
// 5. Save to DB
// 6. Respond: Respond with "Registration Successful" of handle errors.

const register = async(req, res) => {

    try {
        // console.log(req.body);
        const {username, email, phone, password} = req.body; 

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json( {message: "Email Already Exists"});
        }

        //HASH THE PASSWORD
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone, 
            password,
        });

        res.status(201).send({msg: "Registration Successful!", 
        token: await userCreated.generateToken(), 
        userId: userCreated._id.toString(),
        });
    } catch (error) {
        res.status(500).send({message:"internal server error"});
    }
};


// *------------------------
    // Login LOGIC
// *------------------------

const login = async(req, res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials!!!"});
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if(user){
        res.status(200).send({msg: "Login Successful!", 
        token: await userExist.generateToken(), 
        userId: userExist._id.toString(),
        }); 
        }else{
            res.status(401).json({message: "Invalid email or password!!!"});
        }

    } catch (error) {
        // res.status(500).send({msg:"internal server error"});
        next(error);
    }
}


// *------------------------
    // USER LOGIC - To send user data
// *------------------------

const user = async(req, res)=>{
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
        // res.status(200).json({msg: "hi user"});
    } catch (error) {
        console.log(`Error from the user route ${error}`);
    }
}


module.exports = {home, register, login, user};