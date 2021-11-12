const { response } = require("express");
const db = require("../database/models");
const getUrl = (req) =>
  `${req.protocol}://${req.get("host")}${req.originalUrl}`;

module.exports = {
  //traer todos los productos

  productos: async (req, res) => {
    try {
      const products = await db.Auricular.findAll({
        attributes: [
          "id",
          "marca",
          "modelo",
          "precio",
          "descripcion",
          "imagen",
          "stock",
          "oferta",
        ],
      });

      console.log(products);
      let response = {
        meta: {
          status: 200,
          cantidad: products.length,
          url: getUrl(req),
        },
        data: products,
      };
      return res.status(200).json(response);
    } catch (error) {
      return res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message,
      });
    }
  },

  //traer productos por ID

  productosId: async (req, res) => {
    try {
      const productosId = await db.Auricular.findByPk(req.params.id);
      console.log(productosId);
      let response = {
        meta: {
          status: 200,
          cantidad: productosId.length,
          url: getUrl(req),
        },
        data: productosId,
      };
      return res.status(200).json(response);
    } catch (error) {
      return res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message,
      });
    }
  },
};
