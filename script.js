
$.get("navbar.html", function(data){
    $(".navbar").replaceWith(data);
});

$.get("navBarLogin.html", function(data){
  $(".navbarLogin").replaceWith(data);
});

 $.get("footer.html", function(data){
   $(".footer").replaceWith(data);
 });
 
 function NotificationTab(){
  
  let none1 = document.querySelector('.activitySub');
  none1.style.display = "none";

  let none2 = document.querySelector('.profileSub');
  none2.style.display = "none";
  
  let show = document.querySelector(".notificationContainer");
  show.style.display = "flex";
  
  document.querySelector("#activeTab").setAttribute("id","disableTab")
  document.querySelector(".notificationTab").setAttribute("id","activeTab")
  

 }
 function Activity(){
  
  let none1 = document.querySelector('.notificationContainer');
  none1.style.display = "none";

  let none2 = document.querySelector('.profileSub');
  none2.style.display = "none";
  
  let show = document.querySelector(".activitySub");
  show.style.display = "flex";
  
  
  document.querySelector("#activeTab").setAttribute("id","disableTab")
  document.querySelector(".activity").setAttribute("id","activeTab")
  

 }

 function MyProfile(){
  let none1 = document.querySelector('.activitySub');
  none1.style.display = "none";

  let none2 = document.querySelector('.notificationContainer');
  none2.style.display = "none";
  
  let show = document.querySelector(".profileSub");
  show.style.display = "flex";
  
  
  
  document.querySelector("#activeTab").setAttribute("id","disableTab")
  document.querySelector(".myprofile").setAttribute("id","activeTab")
  
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

 function setC1(){
   
  document.querySelector('.couplePhoto').src="assets/c1.webp";
  document.querySelector('.CoupleNames').innerHTML="Dr Lorem ipsum & Lorem ipsum";
  document.querySelector('.weddingDate').innerHTML="DEC 2018";
  document.querySelector('.testimonialText').innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum dui. Donec condimentum lobortis urna, ut ultrices erat euismod at. Donec ullamcorper eros non sapien fermentum, id congue lacus.";
  document.querySelector('#activeTestimonial').setAttribute('id','');
  document.querySelector('.c1').setAttribute('id','activeTestimonial');
 }
 function setC2(){
    document.querySelector('.couplePhoto').src="assets/c2.webp";
    document.querySelector('.CoupleNames').innerHTML="Dr Lorem ipsum & Lorem ipsum";
  document.querySelector('.weddingDate').innerHTML="DEC 2019";
  document.querySelector('.testimonialText').innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum dui. Donec condimentum lobortis urna, ut ultrices erat euismod at. Donec ullamcorper eros non sapien fermentum, id congue lacus.";
  document.querySelector('#activeTestimonial').setAttribute('id','');
  document.querySelector('.c2').setAttribute('id','activeTestimonial');

 }
 function setC3(){
    document.querySelector('.couplePhoto').src="assets/c3.webp";
    document.querySelector('.CoupleNames').innerHTML="Dr Lorem ipsum & Lorem ipsum";
  document.querySelector('.weddingDate').innerHTML="DEC 2020";
  document.querySelector('.testimonialText').innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum dui. Donec condimentum lobortis urna, ut ultrices erat euismod at. Donec ullamcorper eros non sapien fermentum, id congue lacus.";
  document.querySelector('#activeTestimonial').setAttribute('id','');
  document.querySelector('.c3').setAttribute('id','activeTestimonial');

 }
 function setC4(){
    document.querySelector('.couplePhoto').src="assets/c4.webp";
    document.querySelector('.CoupleNames').innerHTML="Dr Lorem ipsum & Lorem ipsum";
  document.querySelector('.weddingDate').innerHTML="DEC 2014";
  document.querySelector('.testimonialText').innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum dui. Donec condimentum lobortis urna, ut ultrices erat euismod at. Donec ullamcorper eros non sapien fermentum, id congue lacus.";
  document.querySelector('#activeTestimonial').setAttribute('id','');
  document.querySelector('.c4').setAttribute('id','activeTestimonial');

 }
 function setC5(){
    document.querySelector('.couplePhoto').src="assets/c5.webp";
    document.querySelector('.CoupleNames').innerHTML="Dr Lorem ipsum & Lorem ipsum";
  document.querySelector('.weddingDate').innerHTML="DEC 2015";
  document.querySelector('.testimonialText').innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum dui. Donec condimentum lobortis urna, ut ultrices erat euismod at. Donec ullamcorper eros non sapien fermentum, id congue lacus.";
  document.querySelector('#activeTestimonial').setAttribute('id','');
  document.querySelector('.c5').setAttribute('id','activeTestimonial');
 }
 function setC6(){
    document.querySelector('.couplePhoto').src="assets/c6.webp";
    document.querySelector('.CoupleNames').innerHTML="Dr Lorem ipsum & Lorem ipsum";
  document.querySelector('.weddingDate').innerHTML="DEC 2018";
  document.querySelector('.testimonialText').innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum dui. Donec condimentum lobortis urna, ut ultrices erat euismod at. Donec ullamcorper eros non sapien fermentum, id congue lacus.";
  document.querySelector('#activeTestimonial').setAttribute('id','');
  document.querySelector('.c6').setAttribute('id','activeTestimonial');
 }
 function setC7(){
  document.querySelector('.couplePhoto').src="assets/c7.webp";
  document.querySelector('.CoupleNames').innerHTML="Dr Lorem ipsum & Lorem ipsum";
  document.querySelector('.weddingDate').innerHTML="DEC 2012";
  document.querySelector('.testimonialText').innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum dui. Donec condimentum lobortis urna, ut ultrices erat euismod at. Donec ullamcorper eros non sapien fermentum, id congue lacus.";
  document.querySelector('#activeTestimonial').setAttribute('id','');
  document.querySelector('.c7').setAttribute('id','activeTestimonial');
}
function hideSearch(){
  document.querySelector('.search').style.display='none';
  document.querySelector('.showSearch').style.display='flex';
  document.querySelector('.feed').style.top='32vw'
}

function showSearch(){
  document.querySelector('.showSearch').style.display='none';
  document.querySelector('.hideSearch').style.display='flex';
  document.querySelector('.search').style.display='flex';
  document.querySelector('.feed').style.top='115vw'

}

function basicSearch(){
  document.querySelector('#activeSearchNav').setAttribute('id','disabledSearchNav');
  document.querySelector('.basicSearchNav').setAttribute('id','activeSearchNav');
  
  document.querySelector('.keywordSearch').style.display='none';
  document.querySelector('.advanceSearch').style.display='none';
  document.querySelector('.basicSearch').style.display='flex';
  document.querySelector('.feed').style.marginTop='12vw'

}

function advanceSearch(){
  document.querySelector('#activeSearchNav').setAttribute('id','disabledSearchNav');
  document.querySelector('.advanceSearchNav').setAttribute('id','activeSearchNav');

  document.querySelector('.keywordSearch').style.display='none';
  document.querySelector('.basicSearch').style.display='none';
  document.querySelector('.advanceSearch').style.display='flex';
  document.querySelector('.feed').style.marginTop='18vw'
}
function keywordSearch(){
  document.querySelector('#activeSearchNav').setAttribute('id','disabledSearchNav');
  document.querySelector('.keywordSearchNav').setAttribute('id','activeSearchNav');

  document.querySelector('.advanceSearch').style.display='none';
  document.querySelector('.basicSearch').style.display='none';
  document.querySelector('.keywordSearch').style.display='flex';
  document.querySelector('.feed').style.marginTop='12vw'

}

function likeToggle(obj){
  
  if(obj.getAttribute('src')=='assets/like.svg'){

    obj.setAttribute('src','assets/liked.svg')
  }
  else{
    obj.setAttribute('src','assets/like.svg')
  }

}

function saveToggle(obj){
  
  if(obj.getAttribute('src')=='assets/save.svg'){

    obj.setAttribute('src','assets/saved.svg')
  }
  else{
    obj.setAttribute('src','assets/save.svg')
  }

}

function setBride(){
  document.querySelector('#activeBrideGroom').setAttribute('id','disabledBrideGroom')
  document.querySelector('.BrideSelect').setAttribute('id','activeBrideGroom')
  document.querySelector('.GroomImages').style.display='none';
  document.querySelector('.BrideImages').style.display='flex';
}
function setGroom(){
  document.querySelector('#activeBrideGroom').setAttribute('id','disabledBrideGroom')
  document.querySelector('.GroomSelect').setAttribute('id','activeBrideGroom')
  document.querySelector('.BrideImages').style.display='none';
  document.querySelector('.GroomImages').style.display='flex';
}

function setLarge(obj){
  
  childbgImg= window.getComputedStyle(obj).backgroundImage;
  parent = obj.parentElement.parentElement;
  parentbgImg = window.getComputedStyle(parent).backgroundImage;
  parent.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0) 67.42%, rgb(0, 0, 0) 96.59%),' + childbgImg

}