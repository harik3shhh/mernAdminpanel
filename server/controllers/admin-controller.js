const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async(req, res)=>{
    try {   
        const users = await User.find({}, {password: 0});
        if(!users || users.length === 0){
            return res.status(400).json({message: "No Users Found"});
        }
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getAllContacts = async(req, res)=>{
    try {   
        const contacts = await Contact.find();
        if(!contacts || contacts.length === 0){
            return res.status(400).json({message: "No Contacts Found"});
        }
        res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

module.exports = {getAllUsers, getAllContacts};