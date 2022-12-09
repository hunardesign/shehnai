$.get("navbar.html", function(data){
    $(".navbar").replaceWith(data);
});

 $.get("footer.html", function(data){
   $(".footer").replaceWith(data);
 });

 function Activity(){
  
  let hide = document.querySelector('.profileSub');
  hide.style.display = "none";
  
  let show = document.querySelector("activitySub");
  show.style.display = "flex";
  
  document.querySelector(".activeTab").setAttribute("class","disableTab")
  document.querySelector(".disableTab").setAttribute("class","activeTab")
  

 }