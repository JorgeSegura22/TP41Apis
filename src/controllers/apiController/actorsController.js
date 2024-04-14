const DB = require('../../database/models')

const op = DB.Sequelize.Op;


module.exports = {

    list: (req, res) => {
        DB.Actor.findAll(

        )
            .then(actors => {

                return res.json({
                    meta: {
                        status: 200,
                        total: actors.length,
                        url: 'api/genres'

                    },
                    data: actors
                }
                )
            })

    },

    detail: (req, res) => {
        DB.Actor.findByPk(req.params.id)
            .then(genre => {
                res.json(genre);
            });
    }, 
    
    create:(req,res) =>{

        DB.Actor.
        create(req.body)
        .then(actor=>{
        return res.status(200).json(
            {
                data:actor,
                status:200,
                create:"La pelicula se guardo correctamente"
            }
        )})
              
            },
            update: function (req,res) {
                let actorId = req.params.id;
                console.log(actorId)
                DB.Actor.update(
                    {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        rating: req.body.rating,
                
                    },
                    {
                        where: {id: actorId}
                    })
                .then((actor)=> {
                    return res.json(actor)})            
                .catch(error => res.send(error))
            },
        
            delete:(req,res)=>{
        
        DB.Actor
        .destroy({where:{id:req.params.id}})
        .then(response=>{
            return res.json(response)
        })
        
            }
}