
import Food from '../models/foodM.js'
import { errorHandler } from "../helpers/dberrorHandler.js";


const listfood = (req, res) => {
    Food.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    })
}


const create = (req, res) => {
    const foodP = new Food(req.body)
    let food = new Food(foodP);


    food.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(result);
    })

};


const remove = (req, res) => {
    let food = req.food
    food.remove((err, deletedfood) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Food was deleted succesfully"
        })
    })
}
const foodById = (req, res, next, id) => {
    Food.findById(id)
        .populate("category")
        .exec((err, food) => {
            if (err || !food) {
                return res.status(400).json({
                    error: "Food not found"
                });
            }
            req.food = food;
            next();
        })
}


export { listfood, create, remove, foodById }