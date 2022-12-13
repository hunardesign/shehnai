
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