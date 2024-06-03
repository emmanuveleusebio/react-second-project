const path = require('path');
const cards = require('../models/cardModel')
const services = require('../services/webServices')

const pages = (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'))
}
const home = async (req, res) => {
    try {
        const datas = await services.homeRender(req, res)
    } catch (error) {
        throw new Error(error)
    }
}

const postBlog = (req, res) => {
  try {
    const post = services.postCard(req, res);
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
    pages,
    postBlog,
    home,
}