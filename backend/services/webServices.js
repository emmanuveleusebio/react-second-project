const cards = require('../models/cardModel')

const homeRender = async (req, res) => {
  try {
    const datas = await cards.find().sort({ createdAt: -1 });;
    console.log(datas);
    res.status(200).json(datas);
  } catch (error) {
    throw new Error(error);
  }
};

const postCard = async (req, res) => {
    try {
        const {
            blog,
            title,
            description,
            img,
            date,
            } = req.body
        
            if(!img || !title || !blog || !description){
                res.status(400)
                throw new Error("All fields are mandatory")
            }
            const createCard = await cards.create({
                img,
                title,
                blog,
                description,
                date,
            })
            res.status(200).json(createCard);
        
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
  homeRender,
  postCard
};
