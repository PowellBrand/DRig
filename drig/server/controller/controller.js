module.exports ={ 
    
    //Create Blog Message
    createMes: (req, res) => {
        const db = req.app.get('db');
        db.createMes().then(()=>{
            res.status(200).send()
        }).catch(()=> res.status(500).send())
    }
}