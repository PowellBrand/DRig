module.exports = {
    createChar: (req, res) => {
        const db = req.app.get('db');
        const { name, fullName, species, sex, height, weight, skinColor, hairColor, features, dob, placeOfBirth, locID, dateOfOrd, placeOfOrd,idNum, echelon, occupation, background } = req.body
        db.createMes(name, fullName, species, sex, height, weight, skinColor, hairColor, features, dob, placeOfBirth, locID, dateOfOrd, placeOfOrd,idNum, echelon, occupation, background).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getCharBio: (req, res) => {
        const db = req.app.get('db');
        db.getCharBio().then((result)=> {
            res.status(200).send(result)
        }).catch((e)=> {
            console.log(e)
            res.status(500).send()})
    },
    createWorld: (req, res) => {
        const db = req.app.get('db');
        const { name, locID, desc } = req.body
        db.createWorld(name, locID, desc).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getWorldInfo: (req, res) => {
        const db = req.app.get('db');
        db.getWorldInfo().then((result)=> {
            res.status(200).send(result)
        }).catch((e)=> {
            console.log(e)
            res.status(500).send()})
    }
}