const User = require("../model/User");

const getAllData = async (req, res) => {

    try {
        const data = await User.find();
        return res.status(200).json({
            status: 200,
            message: "Success!",
            data: data
        })

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        })
    }
};
const createUserData = async (req, res) => {
    try {
        const { nama_lengkap, npm, jurusan, kelas } = req.body;
        await User.create({
            nama_lengkap,
            npm,
            jurusan,
            kelas,
            createdAt: new Date(),
        });

        return res.status(201).json({
            status: 201,
            message: "User created",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

module.exports = {getAllData, createUserData};

