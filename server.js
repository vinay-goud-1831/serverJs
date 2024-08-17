
const http = require("http");

const port = 8081 ;

const toDOList = ["vinay" , "goud ", "ganapuram"];

http
.createServer((req,res)=>{
    const {method , url} = req;

if (url === "/todos"){
    if(method === "GET"){
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.write(toDOList.toString());

    }
    else if(method === "POST"){
        let data = "";
        req
        .on( "error",(err) =>{
           

        }).on("data",(chunck)=>{
            data += chunck ;
           
        }).on("end",()=>{

            
            body = JSON.parse(data);

            let newtoDO = toDOList ;

            newtoDO.push(body.item);  
        });

    } else{
        res.writeHead(501);

         } 
    
    }
    else{
        res.write(404);
        }

        res.end();
})
.listen(port, ()=> {
    console.log(`it was excuted on port 8081 ${port} `);
});



