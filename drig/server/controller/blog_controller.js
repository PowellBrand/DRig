module.exports = {
    //Create Blog Message
    createMes: (req, res) => {
        const db = req.app.get('db');
        const { title, date, author, message } = req.body
        db.createMes(title, date, author, message).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    //Get blog messages
    getMes: (req, res) => {
    const db = req.app.get('db');
    db.getMessages().then((result)=> {
        res.status(200).send(result)
    }).catch((e)=> {
        console.log(e)
        res.status(500).send()})
},

    //Get Landing message
    getLand: (req, res) => {
        const db = req.app.get('db');
        db.getLastMes().then((result)=> {
            res.status(200).send(result)
        }).catch((e) => console.log(e).res.status(500).send())
    },
   
    //Edit post
    editMes: (req, res) => {
        const {title, date, author, message} = req.body;
        const {params} = req;
        const db = req.app.get('db');
    db.editMes([title, date, author, message, params.id]).then((response)=>{
        db.getMessages().then((result)=> {
            res.status(200).send(result)
        }).catch((e)=> {
            console.log(e)
            res.status(500).send()})      
    }).catch((e)=> {
        console.log(e)
        res.status(500).send()})
    },
    //delet post
    deleteMes: (req, res) => {
        const db = req.app.get('db');
        const {params} = req;
        db.deleteMes([params.id]).then(()=>{
            db.getMessages().then((result)=> {
                res.status(200).send(result)
            }).catch((e)=> {
                console.log(e)
                res.status(500).send()})
        }).catch(()=>{
            res.status(500).send()
        })
    }

}
