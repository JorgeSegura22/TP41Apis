const DB =require('../../database/models')

const op= DB.Sequelize.Op;


module.exports = {

    create:(req,res) =>{
console.log(req.body)
DB.Movie.
create(req.body)
.then(movie=>{
return res.status(200).json(
    {
        data:movie,
        status:200,
        create:"La pelicula se guardo correctamente"
    }
)})
      
    },

    update: function (req,res) {
        let movieId = req.params.id;
        console.log(movieId)
        DB.Movie.update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
            })
        .then((movie)=> {
            return res.json(movie)})            
        .catch(error => res.send(error))
    },

    delete:(req,res)=>{

DB.Movie
.destroy({where:{id:req.params.id}})
.then(response=>{
    return res.json(response)
})

    }


}