
$.get("navbar.html", function(data){
    $(".navbar").replaceWith(data);
});

 $.get("footer.html", function(data){
   $(".footer").replaceWith(data);
 });
 
 function Activity(){
  
  let none = document.querySelector('.profileSub');
  none.style.display = "none";
  
  let show = document.querySelector(".activitySub");
  show.style.display = "flex";
  
  document.querySelector(".activeTab").setAttribute("class","disableTab")
  document.querySelector(".disableTab").setAttribute("class","activeTab")
  

 }

 function MyProfile(){
  let none = document.querySelector('.activitySub');
  none.style.display = "none";
  
  let show = document.querySelector(".profileSub");
  show.style.display = "flex";
  
  document.querySelector(".disableTab").setAttribute("class","activeTab")
  document.querySelector(".activeTab").setAttribute("class","disableTab")
  
 }

 function viewAbout(){
  document.querySelector('#activeProfileNav').setAttribute('id','');
  document.querySelector('.viewAbout').setAttribute('id','activeProfileNav')
  

    document.querySelector('.aboutGrid').style.display='grid'
  
  document.querySelector('.familyDetails').style.display='none'
  document.querySelector('.partnerPreferences').style.display='none'
  document.querySelector('.otherDetails').style.display='none'
  document.querySelector('.contactDetails').style.display='none'



 }

 function viewFamilyDetails(){
  document.querySelector('#activeProfileNav').setAttribute('id','');
  document.querySelector('.viewFamilyDetails').setAttribute('id','activeProfileNav')

  document.querySelector('.partnerPreferences').style.display='none'
  document.querySelector('.aboutGrid').style.display='none'
  document.querySelector('.otherDetails').style.display='none'
  document.querySelector('.contactDetails').style.display='none'
  document.querySelector('.familyDetails').style.display='flex'
  
 }
 function viewPartnerPreferences(){
  document.querySelector('#activeProfileNav').setAttribute('id','');
  document.querySelector('.viewPartnerPreferences').setAttribute('id','activeProfileNav')

  document.querySelector('.familyDetails').style.display='none'
  document.querySelector('.aboutGrid').style.display='none'
  document.querySelector('.otherDetails').style.display='none'
  document.querySelector('.contactDetails').style.display='none'
  document.querySelector('.partnerPreferences').style.display='flex'

 }
 function viewOtherDetails(){
  document.querySelector('#activeProfileNav').setAttribute('id','');
  document.querySelector('.viewOtherDetails').setAttribute('id','activeProfileNav')

  document.querySelector('.familyDetails').style.display='none'
  document.querySelector('.aboutGrid').style.display='none'
  document.querySelector('.partnerPreferences').style.display='none'
  document.querySelector('.contactDetails').style.display='none'
  document.querySelector('.otherDetails').style.display='flex'
 }
 function viewContactDetails(){
  document.querySelector('#activeProfileNav').setAttribute('id','');
  document.querySelector('.viewContactDetails').setAttribute('id','activeProfileNav')

  document.querySelector('.familyDetails').style.display='none'
  document.querySelector('.aboutGrid').style.display='none'
  document.querySelector('.partnerPreferences').style.display='none'
  document.querySelector('.otherDetails').style.display='none'
  document.querySelector('.contactDetails').style.display='flex'

 }