const { Publicauthorities } = require("../model");
const { handleResponse, handleError, getPagination } = require("../utils/helper");

exports.create = async (req, res) => {
    try {
        const { title, sort_desc, detail, mobile, } = req.body

        let file_URL = `/media/${req?.file?.filename}`

        const data = { title, sort_desc, detail, mobile, image_URL: file_URL };

        const newPubAuth = new Publicauthorities(data);

        await newPubAuth.save();

        const datad = { ...newPubAuth._doc }

        handleResponse(res, datad, 201)
    } catch (error) {
        if (error.code === 11000) {
            handleError('This publicauthorities already exists.', 400, res)
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

        const pubAuth = await Publicauthorities.find({ ...searchFilter })

        const getPubAuth = pubAuth.filter((user) => user)

        const totalCount = await Publicauthorities.countDocuments()

        const getPaginationResult = await getPagination(req.query, getPubAuth, totalCount);

        handleResponse(res, getPaginationResult, 200)

    } catch (error) {
        handleError(error.message, 400, res)
    };
};

exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const pubAuth = await Publicauthorities.findOne({ _id: id })
        handleResponse(res, pubAuth, 200)
    } catch (error) {
        handleError(error.message, 400, res)
    };
};

exports.update = async (req, res) => {
    try {
        const { title, sort_desc, detail } = req.body
        const { id } = req.params;
        let file_URL = `/media/${req?.file?.filename}`
        const data = { title, sort_desc, detail, image_URL: file_URL };
        await Publicauthorities.updateOne({ _id: id }, data, { new: true })
        res.status(200).send({ message: "Publicauthorities has been successfully update.", error: false })
    } catch (error) {
        handleError(error.message, 400, res)
    };
};


exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        await Publicauthorities.deleteOne({ _id: id })

        handleResponse(res, 'Publicauthorities successfully removed.', 200)
    }
    catch (error) {
        handleError(error.message, 400, res)
    };

}