const fs = require("fs");

//create folder
const createFolder = (folderName) =>{

    //chcek if folder exist

    if(!fs.existsSync(folderName)){
            //create a folder
            fs.mkdirSync(folderName);

    }

};

const defaultPosts = 
'[{"id":"2020", "title":"HTML", "url":"http://someurl.com","description":"The best"}]';

//create a file
const createFile = (file, content) =>{

    //checkif file exist

    if(!fs.existsSync(file)){

        fs.writeFileSync(file, content);

    }

}


module.exports = {
    createFolder,
    createFile
}