var mongoose=require ('mongoose')
var discussionSchema=new mongoose.Schema({
    
    username:String,
    email:String,
  title:String,
  description:String
    
    })
    module.exports=mongoose.model('Discussions',discussionSchema);