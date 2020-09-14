$('.home').hide();





$(document).ready(function () {


    $('.ordernow_button').click(function () {
        $('.home').show();
        $('.menu_container').show();
        $('.promotion_containers').show();
        $('.Welcome_page').hide();
        $('.cart_txt').hide();
    });

    $('.profile').click(function () {
        $('.home').hide();
        $('.welcome_page').show();

    });

    $('.cart').click(function () {
        $('.search').hide();
        $('.Welcome_page').hide();
        $('.cart_txt').show();

    });

    $('.menu').click(function () {
        $('.search').show();
        $('.Welcome_page').hide();
        $('.cart_txt').hide();

    });

    $('.favourite').click(function () {
        $('.search').hide();
        $('.Welcome_page').hide();
        $('.cart_txt').hide();

    });

  

}); //end here





// var slideshow = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("promotion_img");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideshow++;
//   if (slideshow > slides.length) {slideshow = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideshow-1].style.display = "block";  
//   dots[slideshow-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }














filterSelection("allmenu")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("menu_item");
  if (c == "allmenu") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filter_Container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}