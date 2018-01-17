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
   
    //Edit post
    editMes: (req, res) => {
        const {text} = req.body;
        const {params} = req;
        const db = req.app.get('db');
        console.log(req.body.title)
    // db.editMes([params.id]).then(()=>{
        // res.status(200).send(
        //     newMes[params.id] ={
        //         title: text,
        //         date: text,
        //         author: text,
        //         message: text
        //     }
        // )      
    // }).catch((e)=> {
    //     console.log(e)
    //     res.status(500).send()})
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



// getMessages: (req, res) => {
//     const db = req.app.get('db');
//     db.getMessages().then((result)=> {
//         res.status(200).send(result[0])
//     }).catch((e)=> {
//         console.log(e)
//         res.status(500).send()})
// },


 //Get blog messages
//  getMessages: (req, res) => {
//     const db = req.app.get('db');
//     db.getMessages().then((result)=> {
//         res.status(200).send((result)=>{
//             for(var i=0;i<result.length;i++){
//                 return result[i]
//             }
//         })
//     }).catch((e)=> {
//         console.log(e)
//         res.status(500).send()})
// },