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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
// eslint-disable-next-line no-unused-vars
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('mySidenav2').style.width = '100%';
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
// eslint-disable-next-line no-unused-vars
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('mySidenav2').style.width = '0';
}

const dropdown = document.getElementsByClassName('dropdown-btn');
let i;

for (i = 0; i < dropdown.length; i += 1) {
  // eslint-disable-next-line func-names
  dropdown[i].addEventListener('click', function () {
    this.classList.toggle('active');
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
      textColor.style.color = 'white';
      svgColor.style.fill = 'white';
      svgColor2.style.fill = 'white';
    } else {
      svgRotate.style.transform = 'rotate(180deg)';
      textColor.style.color = '#FF375F';
      svgColor.style.fill = '#FF375F';
      svgColor2.style.fill = '#FF375F';
      dropdownContent.style.display = 'flex';
    }
  });
}

// Gallery

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const arr = [
  'img-1.png',
  'img-2.png',
  'img-3.png',
  'img-4.png',
  'img-5.png',
  'img-6.png',
  'img-7.png',
];
shuffle(arr);

const g0 = document.getElementById('g1');
const g1 = document.getElementById('g2');
const g2 = document.getElementById('g3');
const g3 = document.getElementById('g4');
const g4 = document.getElementById('g5');
const g5 = document.getElementById('g6');
const g6 = document.getElementById('g7');

g0.innerHTML = `<img class="w-full h-full rounded-lg" src="./img/${arr[0]}" alt="pretty kitty" />
                <div class="w-full h-full absolute top-0 gallery flex flex-col items-center justify-center rounded-lg">
                  <div class="w-16 h-16 bg-[#00000080] rounded-full border-2 border-solid border-white shadow-[0px_5px_10px_0px_#0000004D] flex justify-center items-center cursor-pointer z-40 r400:w-12 r400:h-12 r300:w-9 r300:h-9" >
                        <img class="w-8 h-8 r400:w-5 r400:h-5 r300:w-4 r300:h-4" src="./images/Icons.png" alt="icons" />
                  </div>
                </div>
                <div class='w-full h-full absolute top-0 flex items-end text-[10px] text-white font-bold px-4 z-20 rounded-lg leading-4 r400:text-[8px] r300:text-[6px]'>
                    <p class="mb-4 r300:mb-1">برگزاری کارگاه استادان همیار در دانشگاه علوم پزشکی تهران</p>
                </div>
`;
g1.innerHTML = `<img class="w-full h-full rounded-lg" src="./img/${arr[1]}" alt="pretty kitty" />`;
g2.innerHTML = `<img class="w-full h-full rounded-lg" src="./img/${arr[2]}" alt="pretty kitty" />`;
g3.innerHTML = `<img class="w-full h-full rounded-lg" src="./img/${arr[3]}" alt="pretty kitty" />`;
g4.innerHTML = `<img class="w-full h-full rounded-lg" src="./img/${arr[4]}" alt="pretty kitty" />`;
g5.innerHTML = `<img class="w-full h-full rounded-lg" src="./img/${arr[5]}" alt="pretty kitty" />`;
g6.innerHTML = `<img class="w-full h-full rounded-lg" src="./img/${arr[6]}" alt="pretty kitty" />`;
