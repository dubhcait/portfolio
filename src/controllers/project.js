


const { getMoreData } = require('../model/queries/getData')

exports.get = (req,res) => {


  
    getMoreData().then(response => {

        console.log(response);

        const children = response.map((element)=> {
           

                return  {
                    "name": element["row_to_json"]["f2"],
                    "type": "url",
                    "url": element["row_to_json"]["f3"]
                   };

                  
        });
       

        const dataToSend = 
        { "children": [...children ,...children],
              "name": "projects",
              "type" : "folder"};

        res.send(dataToSend);
   
})
   
};
