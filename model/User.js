const mongoose = require ('mongoose');
const UserSchema = new mongoose. Schema({
    nama_lengkap: String,
    npm: String,
    jurusan: String,
    kelas: String,
    createdAt: Date,
}) ;
const User = mongoose.model("User", UserSchema);

module.exports = User;
