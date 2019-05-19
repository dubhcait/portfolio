
const { getData } = require('../model/queries/getData')

exports.get = (req,res) => {
  
    getData().then(response => {

    res
     .status(200)
    .render('home', { projects: response }); 
})
   
};
