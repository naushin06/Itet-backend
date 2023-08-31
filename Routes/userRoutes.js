const express =require("express");
const router= express.Router();
const Event=require('../models/userModel')
const EventModel=require('../models/EventHandlerModel')
router.route("/create").post((req,res) =>{
   const name=req.body.name ;
   const fdate=req.body.fdate ;
   const tdate=req.body.tdate ;
   const ftime=req.body.ftime;
   const ttime=req.body.ttime
   const tname=req.body.tname;
   const desc=req.body.desc ;
   const mode:req.body.mode
    const newEvent=new Event({
        name,
       fdate,
       ftime,
       tdate,
       ttime,
        tname,
        desc,
         mode 
    })
newEvent.save();
res.send("the task is completed")
})
router.route('/userData').get((req,res)=>{
    Event.find()
    .then(foundEvents=>res.json(foundEvents))
})
router.route('/update').post((req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let value = req.body.value;
  
    let updateObject = {};
    updateObject[name] = value;
  
    EventModel.updateOne({ id: id }, { $set: updateObject }).then(() => {
      console.log(req.body);
      console.log('done', name, value);
      res.send('updated');
    });
  });
  
// router.route('/update').post((req,res)=>{
//     let id=req.body.id
//     let name=req.body.name
//     let value=req.body.value
//     EventModel.updateOne({id:id},{$set:{name:value}}).then(()=>{
//         console.log(req.body);
//         console.log('done',name,value);
//         res.send('updated')
//     })
// })

router.route('/status').post((req,res)=>{
    let id=req.body.id;
    let color=req.body.COLOR;
    console.log(req.body.COLOR)
    Event.updateOne({_id:id},{$set:{color:color}}).then(()=>{
        console.log('done');
        res.send('updated');
    })
})

router.route('/number').post((req,res)=>{
        // Check if an ID exists using findOne()
const checkIdExistsAlternative = async (id) => {
    try {
      const result = await EventModel.findOne({ id: id });
      if (result) {
        res.send('id is found')
        console.log('ID exists');
      }
      
      else {
        const id=req.body.id;
        const Date="";
        const Datedeadline="";
        const Datestatus="";
        const Time="";
        const Timedeadline="";
        const Timestatus="";
        const Fee="";
        const Feedeadline="";
        const Feestatus="";
        const venue="";
        const venuedeadline="";
        const venuestatus="";
        const Promotion="";
        const Promotiondeadline="";
        const Promotionstatus="";
        const Budget="";
        const Budgetdeadline="";
        const Budgetstatus="";
        const ZoomScedule="";
        const ZoomSceduledeadline="";
        const ZoomScedulestatus="";
        const LandingPage="";
        const LandingPagedeadline="";
        const LandingPagestatus="";
        const ZoomID="";
        const ZoomIDdeadline="";
        const ZoomIDstatus="";
        const poster="";
        const posterdeadline="";
        const posterstatus="";
        const Instagram="";
        const Instagramdeadline="";
        const Instagramstatus="";
        const FB="";
        const FBdeadline="";
        const FBstatus="";
        const Twitter="";
        const Twitterdeadline="";
        const Twitterstatus="";
        const Linkedin="";
        const Linkedindeadline="";
        const Linkedinstatus="";
        const SEO="";
        const SEOdeadline="";
        const SEOstatus="";
        const GroupCreation="";
        const GroupCreationdeadline="";
        const GroupCreationstatus="";
        const coldcalling="";
        const coldcallingdeadline="";
        const coldcallingstatus="";
        const email="";
        const emaildeadline="";
        const emailstatus="";
        const WhatsappSharing="";
        const WhatsappSharingdeadline="";
        const WhatsappSharingstatus="";
        const certificate="";
        const certificatedeadline="";
        const certificatestatus="";
        const participantlist="";
        const participantlistdeadline="";
        const participantliststatus="";
        const Recording="";
        const Recordingdeadline="";
        const Recordingstatus="";
        const Editing="";
        const Editingdeadline="";
        const Editingstatus="";
        const Upload="";
        const Uploaddeadline="";
        const Uploadstatus="";
        const ShareToTheUsers="";
        const ShareToTheUsersdeadline="";
        const ShareToTheUsersstatus="";
        const feedbackFormAnalysis="";
        const feedbackFormAnalysisdeadline="";
        const feedbackFormAnalysisstatus="";
        const KitArrngement="";
        const KitArrngementdeadline="";
        const KitArrngementstatus="";
        const photosUploadIntheFBanddrive="";
        const photosUploadIntheFBanddrivedeadline="";
        const photosUploadIntheFBanddrivestatus="";
        const addcontactDetailsInThePhone="";
        const addcontactDetailsInThePhonedeadline="";
        const addcontactDetailsInThePhonestatus="";
        const photosDuringtheevent="";
        const photosDuringtheeventdeadline="";
        const photosDuringtheeventstatus="";
        const guidepeople="";
        const guidepeopledeadline="";
        const guidepeoplestatus="";
        const oldphotos="";
        const oldphotosdeadline="";
        const oldphotosstatus="";
        const hallready="";
        const hallreadydeadline="";
        const hallreadystatus="";
        const projector="";
        const projectordeadline="";
        const projectorstatus="";
        const mike="";
        const mikedeadline="";
        const mikestatus="";
        const marker="";
        const markerdeadline="";
        const markerstatus="";
        const tea="";
        const teadeadline="";
        const teastatus="";
        const moneyCollecting="";
        const moneyCollectingdeadline="";
        const moneyCollectingstatus="";
        
        const EventDetails= new EventModel(
            {
        id,        
        Date,
        Datedeadline,
        Datestatus,
        Time,
        Timedeadline,
        Timestatus,
        Fee,
        Feedeadline,
        Feestatus,
        venue,
        venuedeadline,
        venuestatus,
        Promotion,
        Promotiondeadline,
        Promotionstatus,
        Budget,
        Budgetdeadline,
        Budgetstatus,
        ZoomScedule,
        ZoomSceduledeadline,
        ZoomScedulestatus,
        LandingPage,
        LandingPagedeadline,
        LandingPagestatus,
        ZoomID,
        ZoomIDdeadline,
        ZoomIDstatus,
        poster,
        posterdeadline,
        posterstatus,
        Instagram,
        Instagramdeadline,
        Instagramstatus,
        FB,
        FBdeadline,
        FBstatus,
        Twitter,
        Twitterdeadline,
        Twitterstatus,
        Linkedin,
        Linkedindeadline,
        Linkedinstatus,
        SEO,
        SEOdeadline,
        SEOstatus,
        GroupCreation,
        GroupCreationdeadline,
        GroupCreationstatus,
        coldcalling,
        coldcallingdeadline,
        coldcallingstatus,
        email,
        emaildeadline,
        emailstatus,
        WhatsappSharing,
        WhatsappSharingdeadline,
        WhatsappSharingstatus,
        certificate,
        certificatedeadline,
        certificatestatus,
        participantlist,
        participantlistdeadline,
        participantliststatus,
        Recording,
        Recordingdeadline,
        Recordingstatus,
        Editing,
        Editingdeadline,
        Editingstatus,
        Upload,
        Uploaddeadline,
        Uploadstatus,
        ShareToTheUsers,
        ShareToTheUsersdeadline,
        ShareToTheUsersstatus,
        feedbackFormAnalysis,
        feedbackFormAnalysisdeadline,
        feedbackFormAnalysisstatus,
        KitArrngement,
        KitArrngementdeadline,
        KitArrngementstatus,
        photosUploadIntheFBanddrive,
        photosUploadIntheFBanddrivedeadline,
        photosUploadIntheFBanddrivestatus,
        addcontactDetailsInThePhone,
        addcontactDetailsInThePhonedeadline,
        addcontactDetailsInThePhonestatus,
        photosDuringtheevent,
        photosDuringtheeventdeadline,
        photosDuringtheeventstatus,
        guidepeople,
        guidepeopledeadline,
        guidepeoplestatus,
        oldphotos,
        oldphotosdeadline,
        oldphotosstatus,
        hallready,
        hallreadydeadline,
        hallreadystatus,
        projector,
        projectordeadline,
        projectorstatus,
        mike,
        mikedeadline,
        mikestatus,
        marker,
        markerdeadline,
        markerstatus,
        tea,
        teadeadline,
        teastatus,
        moneyCollecting,
        moneyCollectingdeadline,
        moneyCollectingstatus,
            }
        )
            EventDetails.save().then(res.send('eventdetails')
    
            ).then(()=>{     console.log(req.body.id)})
      }
    } catch (error) {
        res.send(error.message)
      console.error('Error occurred while checking ID:', error);
    }
  };
  
  // Call the function and pass the ID you want to check
  console.log(req.body.id)
  checkIdExistsAlternative(req.body.id);
    })

router.route('/eventDetails').post((req,res)=>{
      let id=req.body.id;
      console.log(id)


      const checkIdExistsAlternative = async (id) => {
        try {
          const result = await EventModel.findOne({ id: id });
          if (result) {
            res.send('id is found')
            console.log('ID exists');
          }
          else {
            const id=req.body.id;
            const Date="";
            const Datedeadline="";
            const Datestatus="";
            const Time="";
            const Timedeadline="";
            const Timestatus="";
            const Fee="";
            const Feedeadline="";
            const Feestatus="";
            const venue="";
            const venuedeadline="";
            const venuestatus="";
            const Promotion="";
            const Promotiondeadline="";
            const Promotionstatus="";
            const Budget="";
            const Budgetdeadline="";
            const Budgetstatus="";
            const ZoomScedule="";
            const ZoomSceduledeadline="";
            const ZoomScedulestatus="";
            const LandingPage="";
            const LandingPagedeadline="";
            const LandingPagestatus="";
            const ZoomID="";
            const ZoomIDdeadline="";
            const ZoomIDstatus="";
            const poster="";
            const posterdeadline="";
            const posterstatus="";
            const Instagram="";
            const Instagramdeadline="";
            const Instagramstatus="";
            const FB="";
            const FBdeadline="";
            const FBstatus="";
            const Twitter="";
            const Twitterdeadline="";
            const Twitterstatus="";
            const Linkedin="";
            const Linkedindeadline="";
            const Linkedinstatus="";
            const SEO="";
            const SEOdeadline="";
            const SEOstatus="";
            const GroupCreation="";
            const GroupCreationdeadline="";
            const GroupCreationstatus="";
            const coldcalling="";
            const coldcallingdeadline="";
            const coldcallingstatus="";
            const email="";
            const emaildeadline="";
            const emailstatus="";
            const WhatsappSharing="";
            const WhatsappSharingdeadline="";
            const WhatsappSharingstatus="";
            const certificate="";
            const certificatedeadline="";
            const certificatestatus="";
            const participantlist="";
            const participantlistdeadline="";
            const participantliststatus="";
            const Recording="";
            const Recordingdeadline="";
            const Recordingstatus="";
            const Editing="";
            const Editingdeadline="";
            const Editingstatus="";
            const Upload="";
            const Uploaddeadline="";
            const Uploadstatus="";
            const ShareToTheUsers="";
            const ShareToTheUsersdeadline="";
            const ShareToTheUsersstatus="";
            const feedbackFormAnalysis="";
            const feedbackFormAnalysisdeadline="";
            const feedbackFormAnalysisstatus="";
            const KitArrngement="";
            const KitArrngementdeadline="";
            const KitArrngementstatus="";
            const photosUploadIntheFBanddrive="";
            const photosUploadIntheFBanddrivedeadline="";
            const photosUploadIntheFBanddrivestatus="";
            const addcontactDetailsInThePhone="";
            const addcontactDetailsInThePhonedeadline="";
            const addcontactDetailsInThePhonestatus="";
            const photosDuringtheevent="";
            const photosDuringtheeventdeadline="";
            const photosDuringtheeventstatus="";
            const guidepeople="";
            const guidepeopledeadline="";
            const guidepeoplestatus="";
            const oldphotos="";
            const oldphotosdeadline="";
            const oldphotosstatus="";
            const hallready="";
            const hallreadydeadline="";
            const hallreadystatus="";
            const projector="";
            const projectordeadline="";
            const projectorstatus="";
            const mike="";
            const mikedeadline="";
            const mikestatus="";
            const marker="";
            const markerdeadline="";
            const markerstatus="";
            const tea="";
            const teadeadline="";
            const teastatus="";
            const moneyCollecting="";
            const moneyCollectingdeadline="";
            const moneyCollectingstatus="";
            
            const EventDetails= new EventModel(
                {
            id,        
            Date,
            Datedeadline,
            Datestatus,
            Time,
            Timedeadline,
            Timestatus,
            Fee,
            Feedeadline,
            Feestatus,
            venue,
            venuedeadline,
            venuestatus,
            Promotion,
            Promotiondeadline,
            Promotionstatus,
            Budget,
            Budgetdeadline,
            Budgetstatus,
            ZoomScedule,
            ZoomSceduledeadline,
            ZoomScedulestatus,
            LandingPage,
            LandingPagedeadline,
            LandingPagestatus,
            ZoomID,
            ZoomIDdeadline,
            ZoomIDstatus,
            poster,
            posterdeadline,
            posterstatus,
            Instagram,
            Instagramdeadline,
            Instagramstatus,
            FB,
            FBdeadline,
            FBstatus,
            Twitter,
            Twitterdeadline,
            Twitterstatus,
            Linkedin,
            Linkedindeadline,
            Linkedinstatus,
            SEO,
            SEOdeadline,
            SEOstatus,
            GroupCreation,
            GroupCreationdeadline,
            GroupCreationstatus,
            coldcalling,
            coldcallingdeadline,
            coldcallingstatus,
            email,
            emaildeadline,
            emailstatus,
            WhatsappSharing,
            WhatsappSharingdeadline,
            WhatsappSharingstatus,
            certificate,
            certificatedeadline,
            certificatestatus,
            participantlist,
            participantlistdeadline,
            participantliststatus,
            Recording,
            Recordingdeadline,
            Recordingstatus,
            Editing,
            Editingdeadline,
            Editingstatus,
            Upload,
            Uploaddeadline,
            Uploadstatus,
            ShareToTheUsers,
            ShareToTheUsersdeadline,
            ShareToTheUsersstatus,
            feedbackFormAnalysis,
            feedbackFormAnalysisdeadline,
            feedbackFormAnalysisstatus,
            KitArrngement,
            KitArrngementdeadline,
            KitArrngementstatus,
            photosUploadIntheFBanddrive,
            photosUploadIntheFBanddrivedeadline,
            photosUploadIntheFBanddrivestatus,
            addcontactDetailsInThePhone,
            addcontactDetailsInThePhonedeadline,
            addcontactDetailsInThePhonestatus,
            photosDuringtheevent,
            photosDuringtheeventdeadline,
            photosDuringtheeventstatus,
            guidepeople,
            guidepeopledeadline,
            guidepeoplestatus,
            oldphotos,
            oldphotosdeadline,
            oldphotosstatus,
            hallready,
            hallreadydeadline,
            hallreadystatus,
            projector,
            projectordeadline,
            projectorstatus,
            mike,
            mikedeadline,
            mikestatus,
            marker,
            markerdeadline,
            markerstatus,
            tea,
            teadeadline,
            teastatus,
            moneyCollecting,
            moneyCollectingdeadline,
            moneyCollectingstatus,
                }
            )
                EventDetails.save().then(res.send('eventdetails')
        
                ).then(()=>{console.log('a')})
          }
        }
        catch(err){
          console.log(err.message)
        }
      }
      checkIdExistsAlternative(id)
})

router.route('/eventDetailsUpdation').post((req,res)=>{
  let id=req.body.id;
  //to fiter out empty elements from the entire object 
  function filterEmptyAttributes(obj) {
    const filteredObj = {};
    for (const key in obj) {
     
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          
          // Exclude empty-valued attributes
          if (value !== null && value !== undefined && value !== '') {
            filteredObj[key] = value;
          }
              
      }

    }
    return(filteredObj)
  }


  const checkIdExistsAlternative = async (id) => {
    try {
      const result = await EventModel.findOne({ id: id });
      if (result) {
        let filteredObj=filterEmptyAttributes(result._doc)
        console.log(filteredObj)
        res.send(filteredObj)
      }
    }
    catch(err){
      console.log(err.message);
    }
  }
  checkIdExistsAlternative(id)
})


router.route('/delete').post((req,res)=>{
  let id=req.body.id

  Event.deleteOne( {"_id": id }).then(()=>{

    EventModel.deleteOne({"id":id}).then(()=>{
      console.log('done');
    })
    res.send('main event deleted')
  });
})
module.exports=router
