 
var Request = require("request");
var express=require('express');
//const mongoose    =require('mongoose')
const bodyparser  =require('body-parser');
//mongoose.connect("mongodb://localhost:27017/moviesite", { useNewUrlParser: true });




var app=express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(__dirname+"/public"));

app.post('/get',function(req,res){

var query=req.body.name;
console.log(query);
var arr=query.split(" ");
var result="";
for(var i=0;i<arr.length;i++)
{
if(i<arr.length-1)
{
    result+=arr[i]+"+"
}
else{

    result+=arr[i];
}
} 



    
Request.get("https://api.themoviedb.org/3/search/movie?api_key=2b6f6b0f9f52bbfa3376c020de4832e3&query="+result, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }

    var found=JSON.parse(body);
 //  console.log(tvshows.results[0].title);
   res.render('index.ejs',{movies:found})


})










    
    })
    



app.get('/tvshows',function(req,res){

    Request.get("https://api.themoviedb.org/3/tv/popular?api_key=2b6f6b0f9f52bbfa3376c020de4832e3"+"&page="+req.params.id, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
    
        var tvshows=JSON.parse(body);
       console.log(tvshows.results[0].title);
       res.render('index.ejs',{movies:tvshows})


})




});






app.get('/:id',function(req,res){
    Request.get("https://api.themoviedb.org/4/list/1?api_key=2b6f6b0f9f52bbfa3376c020de4832e3"+"&page="+req.params.id, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
    
        var e=JSON.parse(body);
       // console.log(e.results[0].title);
       res.render('index.ejs',{movies:e})
    
    });
}
)



app.listen(3030);