const jwt = require('jsonwebtoken')

const { JWT_EXPIRESIN, JWT_SECREATE } = require("../config/config")
const { User } = require("../model")
const { handleError, handleResponse, getPagination } = require("../utils/helper")

exports.create = async (req, res) => {
    try {
        const { name, email, password, mobile } = req.body

        const data = { name, email, password, mobile, };
        const token = jwt.sign({ data }, JWT_SECREATE, { expiresIn: JWT_EXPIRESIN });

        const newUser = new User(data);

        await newUser.save();

        const datad = { ...newUser._doc, token }

        handleResponse(res, datad, 201)
    } catch (error) {
        if (error.code === 11000) {
            handleError('This userName already exists.', 400, res)
            return
        }
        handleError(error.message, 400, res)
    };
};



exports.find = async (req, res) => {
    try {
        const { role, q } = req.query;
        const searchFilter = q ? {
            $or: [
                { name: { $regex: new RegExp(q, 'i') } },
                { userName: { $regex: new RegExp(q, 'i') } }
            ]
        } : {};

        const users = await User.find({ ...searchFilter })

        const getUsers = users.filter((user) => user.role !== 'admin')

        const totalCount = await User.countDocuments()

        const getPaginationResult = await getPagination(req.query, getUsers, totalCount);

        handleResponse(res, getPaginationResult, 200)

    } catch (error) {
        handleError(error.message, 400, res)
    };
};



exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id })
        handleResponse(res, user, 200)
    } catch (error) {
        handleError(error.message, 400, res)
    };
};


exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, mobile } = req.body

        const data = { name, email, mobile, };

        await User.updateOne({ _id: id }, data, { new: true })
        res.status(200).send({ message: "User has been successfully update.", error: false })
    } catch (error) {
        handleError(error.message, 400, res)
    };
};


exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await User.deleteOne({ _id: id })

        handleResponse(res, 'User successfully removed.', 200)

    } catch (error) {
        handleError(error.message, 400, res)
    };
};

exports.getTotalUsers = async (req, res) => {
    try {
        const users = await User.find()
        const getuAllUsers = users.filter((user) => user.role !== 'admin');
        getuAllUsers?.length
        res.send(getuAllUsers)
    } catch (error) {
        res.send(error)
    }
};
