function smoothScroll()
{
    var menu = document.querySelectorAll("#navigation a");

    for (var i = 0; i < menu.length; i++)
    {
      menu[i].addEventListener("click", function(event)
        {
          event.preventDefault();

          var aElm = event.target.getAttribute("href");

          var selectedSection = document.querySelector(aElm);

          if(window.scrollY < selectedSection.offsetTop)
              {
                //scrolldown
                scrollTo(selectedSection.offsetTop, 17);
              }
          else if(window.scrollY > selectedSection.offsetTop);
              {
                //scrollup
                scrollTo(selectedSection.offsetTop, -17);
              }
        });
      }
    }

function scrollTo(destination, step)
  {
    setTimeout (function()
        {
          if(step > 0 && window.scrollY < destination)
              {
                window.scrollBy(0, step);
                scrollTo(destination, step);
              }
          else if (step <= 0 && window.scrollY > destination)
              {
                window.scrollBy(0, step);
                scrollTo(destination, step);
              }
      },  1);

    }

smoothScroll();

/* portfolio filter */

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
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
function w3RemoveClass(element, name) {
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
var btnContainer = document.getElementById("filter-box");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* portfolio filter slut */


function myFunction() {
    var x = document.getElementById("showmore");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* ---  modal  --- */

function closeModal() {
    // Find alle modals
    var modals = document.getElementsByClassName("modal");

    // Sæt display til none for alle
    for(var i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}

var openModal = function() {
    // Få værdien af data-target fra den knap der blev trykket på (this)
    var modalID = this.getAttribute("data-target");

    // Find modal elementet med tilsvarende værdi
    var modal = document.querySelectorAll("[data-modal='" + modalID + "']")[0];

    // Sæt den specifikke modals display til block
    modal.style.display = "block";
}

// Find alle elementer med class "modal-button"
var buttons = document.getElementsByClassName("modal-button");

// For hver af dem, addEventListener - hvis der klikkes, kører openModal funktionen
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", openModal, false);
}
/* Modal - slut*/

/*-------- slider --------*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

/*-------- slider- slut --------*/
