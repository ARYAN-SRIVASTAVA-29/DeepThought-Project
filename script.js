// Get the plus and cross icons
const plusIcon = document.querySelector('#notice .fa-plus');
const crossIcon = document.querySelector('#notice .fa-xmark');


plusIcon.addEventListener('click', () => {
 
  plusIcon.style.display = 'none';

  crossIcon.style.display = 'block';
  
  document.getElementById('notice').style.right = '0px';
});


crossIcon.addEventListener('click', () => {

  plusIcon.style.display = 'block';

  crossIcon.style.display = 'none';
  
  document.getElementById('notice').style.right = '-40px';
});





// Get the arrow-left icon
const arrowLeftIcon = document.querySelector('#collapse .c-h-icon');
const chIcon = document.querySelector('#collapse .ch-i');
const collapseElement = document.getElementById('collapse');


let isCollapsed = true;


arrowLeftIcon.addEventListener('click', () => {

  chIcon.style.transform = isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)';
  
  
  const leftValue = isCollapsed ? '0px' : '-320px';
  collapseElement.style.left = leftValue;


  isCollapsed = !isCollapsed;
});




var seeMoreBtn = document.getElementById("seeMoreBtn");
var expanded = false;

seeMoreBtn.addEventListener("click", function() {
  if (expanded) {
    seeMoreBtn.innerHTML = "See More";
    expanded = false;
  } else {
    seeMoreBtn.innerHTML = "See Less";
    expanded = true;
  }
});

