const express = require('express')
const app = express();
const {createFile,createFolder } =require("./utils.js")
const postsData = require("./data/posts.json")
const fs = require("fs");

// console.log(postsData);
 //create folder

// createFolder("data");

//pass incoming data

app.use(express.json());


//home route
  app.get('/', function (req, res) {
    res.send('Home Route')
  })
  
//fetchs all posts
  app.get('/posts', function (req, res) {
    res.json({
        message: "posts fetched successfu;lly",
        postsData

    })
  })

//fetch single posts
  app.get('/posts/:id', function (req, res) {
    // res.send('create posts route')
    const id = req.params.id;
   //find post by id
   const postFound = postsData.find(post =>{

        return post.id === id; 
   });

  if(!postFound){

        res.json({
            message: "post not fund"

        })
  }
  else{

        //send the post to the user

        res.json({postFound})
       
  }
  })


  //create posts
  app.post('/posts', function (req, res) {
   //get the post from user
    const newPost = req.body;

   //push the new post into exisiting post

   postsData.push({
    ...newPost, 
    id: postsData.length.toString(),

   });

   console.log(postsData);
   //write to the file

   fs.writeFile("data/posts.json", JSON.stringify(postsData), function(err){

    if(err){


    }
    //send the message to user
    res.json({

        message: 'Post Created Successfully',
    })

   })
  })

  //update post
  app.put('/posts/:id', function (req, res) {
    //get the dynamic id === params
    const id = req.params.id;
    console.log(id);
    res.send('update certain posts route');
  });

  //delete post
  app.delete('/posts/:id', function (req, res) {
    // res.send('delte certain id posts route');

    //get the id

    const id = req.params.id;
    const filteredPosts = postsData.filter(function(post){
       
        return post.id !== id;
       
    });
    console.log(filteredPosts);
  })



  app.get('/posts/:id', function (req, res) {
    res.send('single post route');
  })








//create a server
app.listen(3000, ()=> {

    console.log(`Server is running at port no 3000`)
})
  