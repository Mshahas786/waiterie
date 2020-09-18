$('#home').hide();


$(document).ready(function () {


  $('.ordernow_button').click(function () {
    $('#home').show();
    $('.menu').show();
    $('.footer').show();
    $('.search_bar').show();
    $('.promotion_container').show();
    $('.Welcome_page').hide();
    $('.cart_txt').hide();
    $('#cart').hide();
  });

  $('.qr_code_btn').click(function () {
    $('#home').hide();
    $('.Welcome_page').show();

  });

  $('.cart_btn').click(function () {
    $('.menu').hide();
    $('.search_bar').hide();
    $('.Welcome_page').hide();
    $('#menu').hide();
    $('.promotion_container').hide();
    $('.cart_txt').show();
    $('#cart').show();

  });

  $('.menu_btn').click(function () {
    $('.promotion_container').show();
    $('.search_bar').show();
    $('.menu').show();
    $('#cart').hide();
    $('.cart_txt').hide();

  });

  // $('#cartIcon').click(function () {
  //   console.log('clicked');
  //   $('#cart').show();
  //   $('#menu').hide();
  // });

  // $('.favourite_btn').click(function () {
  //   $('.search').hide();
  //   $('.Welcome_page').hide();
  //   $('.cart_txt').hide();
  //   $('#cart').hide();
  //   $('#menu').hide();
  //   $('#promotions').hide();

  // });



}); //end here




filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("menu_item");
  if (c == "all") c = "";
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
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


///////////////// cart section /////////////////////////////////////////////////////////////////////////


var total = 0; //initializing the numeric variable

$(document).ready(function () {


  $('.item_add_button').on('click', function () {

    //item name from id of button being clicked;
    //this refers to what is being clicked

    console.log(this.id);
    // $('#items').append ('<br>' + this.id)
    var itemName = this.id; //storing the value to a variable
    $('#items').append('<br>' + itemName);

    // console.log($('.menu-button').index(this));
    var myIndex = $('.item_add_button').index(this);
    console.log(myIndex);

    var itemPrice = document.getElementsByClassName('itemPrice');
    console.log(itemPrice);
    console.log(itemPrice.length);

    //searching or matching
    for (var i = 0; i < itemPrice.length; i++) {
      // console.log(itemPrice[i].innerHTML);
      if (myIndex == i) {
        // console.log('yes');//
        console.log(itemPrice[i].innerHTML);
        var price = itemPrice[i].innerHTML;
        $('#price').append('<br>' + price);
        total += parseFloat(price);
        console.log(total);
        document.getElementById('amount').innerHTML = '$' + total.toFixed(2);
      } //if ends
    } //for loop ends

  });


});//document.ready() ends