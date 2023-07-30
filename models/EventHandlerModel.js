const mongoose=require('mongoose');
const UserSchema={
    id:String,
    Date:String,
    Datedeadline:String,
    Datestatus:String,
    Time:String,
    Timedeadline:String,
    Timestatus:String,
    Fee:String,
    Feedeadline:String,
    Feestatus:String,
    venue:String,
    venuedeadline:String,
    venuestatus:String,
    Promotion:String,
    Promotiondeadline:String,
    Promotionstatus:String,
    Budget:String,
    Budgetdeadline:String,
    Budgetstatus:String,
    ZoomScedule:String,
    ZoomSceduledeadline:String,
    ZoomScedulestatus:String,
    LandingPage:String,
    LandingPagedeadline:String,
    LandingPagestatus:String,
    ZoomID:String,
    ZoomIDdeadline:String,
    ZoomIDstatus:String,
    poster:String,
    posterdeadline:String,
    posterstatus:String,
    Instagram:String,
    Instagramdeadline:String,
    Instagramstatus:String,
    FB:String,
    FBdeadline:String,
    FBstatus:String,
    Twitter:String,
    Twitterdeadline:String,
    Twitterstatus:String,
    Linkedin:String,
    Linkedindeadline:String,
    Linkedinstatus:String,
    SEO:String,
    SEOdeadline:String,
    SEOstatus:String,
    GroupCreation:String,
    GroupCreationdeadline:String,
    GroupCreationstatus:String,
    coldcalling:String,
    coldcallingdeadline:String,
    coldcallingstatus:String,
    email:String,
    emaildeadline:String,
    emailstatus:String,
    WhatsappSharing:String,
    WhatsappSharingdeadline:String,
    WhatsappSharingstatus:String,
    certificate:String,
    certificatedeadline:String,
    certificatestatus:String,
    participantlist:String,
    participantlistdeadline:String,
    participantliststatus:String,
    Recording:String,
    Recordingdeadline:String,
    Recordingstatus:String,
    Editing:String,
    Editingdeadline:String,
    Editingstatus:String,
    Upload:String,
    Uploaddeadline:String,
    Uploadstatus:String,
    ShareToTheUsers:String,
    ShareToTheUsersdeadline:String,
    ShareToTheUsersstatus:String,
    feedbackFormAnalysis:String,
    feedbackFormAnalysisdeadline:String,
    feedbackFormAnalysisstatus:String,
    KitArrngement:String,
    KitArrngementdeadline:String,
    KitArrngementstatus:String,
    photosUploadIntheFBanddrive:String,
    photosUploadIntheFBanddrivedeadline:String,
    photosUploadIntheFBanddrivestatus:String,
    addcontactDetailsInThePhone:String,
    addcontactDetailsInThePhonedeadline:String,
    addcontactDetailsInThePhonestatus:String,
    photosDuringtheevent:String,
    photosDuringtheeventdeadline:String,
    photosDuringtheevent:String,
    guidepeople:String,
    guidepeopledeadline:String,
    guidepeople:String,
    oldphotos:String,
    oldphotosdeadline:String,
    oldphotosstatus:String,
    hallready:String,
    hallreadydeadline:String,
    hallreadystatus:String,
    projector:String,
    projectordeadline:String,
    projectorstatus:String,
    mike:String,
    mikedeadline:String,
    mikestatus:String,
    marker:String,
    markerdeadline:String,
    markerstatus:String,
    tea:String,
    teadeadline:String,
    teastatus:String,
    moneyCollecting:String,
    moneyCollectingdeadline:String,
    moneyCollectingstatus:String,
}
const EventDetails=mongoose.model('EventDetails',UserSchema)
module.exports=EventDetails;