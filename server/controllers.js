const Models = require('../server/postgreDB/index.js');
const faker = require('faker');


//create home property 

 const addHomeValue =(req,res) => {
     const homeData =req.body
     Models.addHomeValue(homeData,(err)=>{
         if(err){
             console.log('there is an error in addHomevalue',err)
         } else {
             res.status(200)
         }
     })
 }

// read home property

 const  getHomeByZipcode =(req,res) =>{
    const zipcode = Math.floor(Math.random() * 99999) 
    //console.log('controllers')
    Models.getHomeByZipcode(zipcode,(result)=>{
        if(result === null){
            console.log('there is an errir in getHomeByzipcode')
        } else {
            //console.log('hahahaahahah')
            res.send(result)
        }
    })
}

// const  getHomeById =(req,res) =>{
//     const id = Math.floor(Math.random() * 10000000) 
//     //console.log('controllers')
//     Models.getHomeById(id,(result)=>{
//         if(result === null){
//             console.log('there is an errir in getHomeByzipcode')
//         } else {
//             //console.log('hahahaahahah')
//             res.send(result)
//         }
//     })
// }

const updateHomeValue = (req, res) => {
    const updateData = req.body;
    const id = req.params.id;
  
    Models.updateHomeValue(id, updateData, (err) => {
      if (err) {
        console.log('Error updating homevalue', err);
      } else {
        res.status(200);
      }
    });
  };


  const deleteHomeValue = (req, res) => {
    const id = req.params.id;
  
    Models.deleteHomeValue(id, (err) => {
      if (err) {
        console.log('Error deleting homevalue', err);
      } else {
        res.status(200);
      }
    });
  };

  module.exports = {
    addHomeValue,
    getHomeByZipcode,
    updateHomeValue,
    deleteHomeValue
    //getHomeById
  };