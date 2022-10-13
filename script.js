$.get("navbar.html", function(data){
    $(".navbar").replaceWith(data);
});

 $.get("footer.html", function(data){
   $(".footer").replaceWith(data);
 });

 