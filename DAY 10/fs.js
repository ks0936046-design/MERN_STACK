let fs=require("fs");

if(fs.existsSync("./document")){
fs.mkdir("./document",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("folder created successfully");
    }
});
}

fs.writeFile("./document/hello.txt","Hello Hello Hello",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file created successfully");
    }
});
