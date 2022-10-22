import User from "../models/UsuarioM.js";

const users = (req, res) => {
    res.send("User list")
    console.log("Show Users");
}

const createUser = async (req, res) => {

    const { name } = req.body;
    const exist = await User.findOne({ name })

    if (exist) {
        const error = new Error(`user alredy exist`);
        return res.status(400).json({ msg: error.message })
    }


    try {
        const Usuario = new User(req.body);
        const usuarioAlmacenado = await Usuario.save()
        res.json(usuarioAlmacenado)

    } catch (error) {
        console.log(error);
    }
    //console.log(req.body)



}
export { users, createUser }