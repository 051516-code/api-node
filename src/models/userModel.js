const {Schema} = require('mongoose')

const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: { type: String, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true, unique: true}
});

//TODO : encrypt the password before save
userSchema.pre('save', async (next) => {
    const user = this;

    if(!user.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10); // TODO: genre the num of salt to hash
    const hash = await bcrypt.hash(user.password, salt) // TODO: hashing the password

    user.password = hash // asing the hashed password

    next();
});


//TODO:  Compare the password
userSchema.methods.comparePasword = async(candidatePassWord) => {
    const user = this;

    return bcrypt.compareSync(candidatePassWord, user.password)
}


module.exports = mongoose.model('User', userSchema);