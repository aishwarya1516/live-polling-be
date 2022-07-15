const nomineeSchema = require('../database/models/nominee');
const nomineeData = require('../json/nominees.json');
const seeder = async () => {
         nomineeSchema.find().lean()
         .then(data => {
             if(data.length === 0){
                nomineeSchema.insertMany(nomineeData)
                .then(data => {
                    console.log('Data inserted successfully');
                })
                .catch(err => console.log('error in inserting'))
             }
         })
         .catch(err => console.log('Error in deleting'));
       
}

module.exports = {
    seeder
}