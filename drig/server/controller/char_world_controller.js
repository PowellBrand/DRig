module.exports = {
    createChar: (req, res) => {
        
        const db = req.app.get('db');
        const { name, full_name, species, sex, height, weight, skin_color, hair_color, eye_color, features, date_of_birth, place_of_birth, locid,
            date_of_ordination, place_of_ordination, identification_number, echelon, occupation, background } = req.body
            
        db.createChar([name, full_name, species, sex, height, +weight, skin_color, hair_color, eye_color, features, date_of_birth, place_of_birth, locid,
            date_of_ordination, place_of_ordination, identification_number, echelon, occupation, background]).then((result) => {
                
                res.status(200).send()
            }).catch(() => res.status(500).send())
    },
    getCharBio: (req, res) => {
        const db = req.app.get('db');
        db.getCharBio().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },
    deleteChar: (req, res) => {
        const db = req.app.get('db');
        const {params} = req;
        db.deleteChar([params.id]).then(()=>{
            db.getCharBio().then((result)=> {
                res.status(200).send(result)
            }).catch((e)=> {
                console.log(e)
                res.status(500).send()
            })
        })
    },
    createWorld: (req, res) => {
        const db = req.app.get('db');
        const { name, locid, description } = req.body
        db.createWorld(name, locid, description).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    deleteWorld: (req, res) => {
        const db = req.app.get('db');
        const {params} = req;
        db.deleteWorld([params.id]).then(()=> {
            db.getWorldInfo().then((result)=> {
                res.status(200).send(result)
            }).catch((e)=> {
                console.log(e)
                res.status(500).send()
            })
        })
    },
    getWorldInfo: (req, res) => {
        const db = req.app.get('db');
        db.getWorldInfo().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    }
}