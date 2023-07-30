const mongoose=require('mongoose');
const EventSchema={
    name:String,
    fdate:String,
    ftime:String,
    tdate:String,
    ttime:String,
    tname:String,
    desc:String,
    decimal:String,
}
const Event=mongoose.model('Event',EventSchema)
module.exports=Event;