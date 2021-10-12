const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/node-js');
var db=mongoose.connection;

db.on('error',console.error.bind(console,"Connection error : "))
db.once('open' , function (){
    console.log(" ")
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const kittySchema = new mongoose.Schema({
  desc: String,
  comp: Boolean
});

console.log("Press 1 to create tasks");
console.log("Press 2 to read tasks");
console.log("Press 3 to update tasks");
console.log("Press 4 to delete tasks");
readline.question('Option : ', opt => {
  
  const Kitten = mongoose.model('node', kittySchema);
  if(opt==="1"){
  const fluffy = new Kitten({ desc: 'sid' , comp: true});
  fluffy.save();
  console.log("tasks are saved.")
  }
  else if (opt==="2"){
    Kitten.find({comp : false},(err,res)=>{
      console.log(res);
    })
  }
  else if (opt==="4"){
    Kitten.deleteOne({
      desc: "rupin"
    },()=> {
      console.log("deleted")
      });
  }
  else if(opt==="3"){
    Kitten.findOneAndUpdate({desc:"sid"},{$set:{desc:"rupin vijan"}},function(err, doc){
      if(err){
          console.log("Something wrong when updating data!");
      }
    
      console.log("Updated");
    });
  }
  


})



// async function xex(Kitten){
//   const kittens = await Kitten.find();
// console.log(kittens);
// }


