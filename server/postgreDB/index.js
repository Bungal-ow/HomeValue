const db = require('./db.js');


const getHomeByZipcode = (zipcode,callback) =>{
    const query = `select * from homes where zipcode =${zipcode} limit 11`
    //console.log('++++++++++++++=')
    db.query(query,(err,res)=>{
        if(err){
            console.log('there is an error in index GET', err)
        } else {
           // console.log('lkkkkkkkkkkkkk')
            callback(res.rows)
        }
    });
}



// const getHomeById = (id,callback) =>{
//     const query = `select * from homes where id =${id}`
//     //console.log('++++++++++++++=')
//     db.query(query,(err,res)=>{
//         if(err){
//             console.log('there is an error in index GET', err)
//         } else {
//            // console.log('lkkkkkkkkkkkkk')
//             callback(res.rows)
//         }
//     });
// }


const addHomeValue = (params,callback) =>{
    const query = `INSERT INTO homes (id, address, zipcode, onmarket, sqft, bedcount, bathcount, listingvalue, pictureurl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    db.query(query,params,(err,res)=>{
        if(err){
            console.log('there is an error in index ADD',err)
        } else {
            callback(res)
        }
    });
}

const updateHomeValue = (id,field,callback)=> {
    const query = `update homes SET ? where id =${id} `
    db.query(query,field,(err,res)=>{
        if(err){
            console.log("there is an error in index UPDATE",err)
        } else{
            callback(res)
        }
    });
}

const deleteHomeValue = (id,callback) =>{
    const query = `Delete From homes where id = ${id}`
    db.query(query,id,(err,res)=>{
        if(err){
            console.log("there is an error in DELETE",err)
        } else{
            callback(res);
        }
    });
}


module.exports = {
    getHomeByZipcode,
    addHomeValue,
    updateHomeValue,
    deleteHomeValue
    //getHomeById
};