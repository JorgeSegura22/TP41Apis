const DB = require('../../database/models')

const op = DB.Sequelize.Op;


module.exports = {

    list: (req, res) => {
        DB.Genre.findAll(

        )
            .then(genres => {

                return res.json({
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: 'api/genres'

                    },
                    data: genres
                }
                )
            })

    },

    detail: (req, res) => {
        DB.Genre.findByPk(req.params.id)
            .then(genre => {
                res.json(genre);
            });
    }
}