
const express = require("express");

const app = express();
app.use(express.json());

const port = 8081 ;

const toDoList = ["Vinay","Goud","ganapuram"];

app.get("/todos",(req,res)=>{
    res.status(200).send(toDoList);
});
app.post("/todos",(req,res)=>{
    let toDo = req.body.name;
    toDoList.push(toDo);
    res.status(201).send({message : "sent succesfull"});

});
app.delete("/todos",(req,res)=>{
     let deleteItem = req.body.name;
     toDoList.find((elem,index)=>{
        if(elem === deleteItem);
        toDoList.splice(index,1)
     });


    res.status(201).send({message : `delete succesfull ${req.body.name}`});

})


app.listen(port,()=>{
    console.log(`Expressjs started at ${port}`);
});



