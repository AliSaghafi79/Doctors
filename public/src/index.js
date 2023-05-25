// ....................SlideShow ...............................
let slideIndex = 0;
let uni = 1;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('Slideimg');

  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slideIndex += 1;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
}

showSlides();

// eslint-disable-next-line no-unused-vars
function plusSlides(n) {
  showSlides((uni += n));
}

let clear = setInterval(() => {
  showSlides();
}, 5000);

const closeIcons = document.getElementsByClassName('arrow');

const App = () => {
  clearInterval(clear);
  clear = setInterval(() => {
    showSlides();
  }, 10000);
  return clear;
};

for (let j = 0; j < closeIcons.length; j += 1) {
  closeIcons[j].addEventListener('click', App);
}

// Header Menu


// eslint-disable-next-line no-unused-vars
function openNav() {
  document.getElementById('mySidenav').style.width = '100%';
}


// eslint-disable-next-line no-unused-vars
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

const dropdown = document.getElementsByClassName('dropdown-btn');
let i;

for (i = 0; i < dropdown.length; i += 1) {
  // eslint-disable-next-line func-names
  dropdown[i].addEventListener('click', function () {
    const dropdownContent = this.nextElementSibling;
    const svgRotate = this.children[1];
    const svgColor = svgRotate.children[1];
    const svgColor2 = svgRotate.children[0];
    const textColor = this.children[0];

    if (
      dropdownContent.style.display === 'flex' ||
      svgRotate.style.transform === 'rotate(180deg)' ||
      textColor.style.color === '#FF375F' ||
      svgColor.style.fill === '#FF375F' ||
      svgColor2.style.fill === '#FF375F'
    ) {
      dropdownContent.style.display = 'none';
      svgRotate.style.transform = 'rotate(0)';
      textColor.style.color = '#002a54';
      svgColor.style.fill = '#002a54';
      svgColor2.style.fill = '#002a54';
    } else {
      svgRotate.style.transform = 'rotate(180deg)';
      textColor.style.color = '#FF375F';
      svgColor.style.fill = '#FF375F';
      svgColor2.style.fill = '#FF375F';
      dropdownContent.style.display = 'flex';
    }
  });
}
