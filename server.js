const express=require('express')
const app=express()
app.use(express.static('route'))



addtemps=app.use(function(req, res, next){
    var temps=new Date()
    var t=temps.toTimeString()[0]+temps.toTimeString()[1]
    var heure=parseInt(t)
        var typ=typeof(heure)
        if ((heure>=8) && (heure<=17)){
            console.log("welcome ")
                 next();
       
        }
        else{
            console.log("Our office is not open now")
           
        }         
 });


app.get('/',(req,res)=>{
    res.sendFile('route/home.html',{root:__dirname})
})
app.get('/contact',(req,res)=>{
    res.sendFile('route/contact.html' , { root : __dirname});
})
app.get('/services',(req,res)=>{
    res.sendfile('route/ourservices.html',{root:__dirname})
})



app.listen(3000,(err,data)=>{
    if(err)
    console.log('this server not ranning')
    else
    console.log('the server ranning a localhost 3000')
})