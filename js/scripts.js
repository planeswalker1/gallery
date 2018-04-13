// Business or (back-end) logic:
// return a random number between 1 and a limit
function randomNumber (limit) {
  return Math.floor(Math.random() * limit) + 1;
}

//image alts
let imageAlts = ['a butterfly', 'cherry blossoms', 'a crocus', 'crocuses', 'a forest path', 'the northern lights', 'a pocket watch', 'a seashell', 'a herd of sheep', 'a lighthouse', 'a tiger', 'a rose flower'];

// generate image alt
function generateAlt (imageSource) {
  let alt = imageAlts[imageSource - 1];
  return alt;
}

// generate html based on passed in width and heights
function generateHtml ([column, row]) {
  let number = randomNumber(12);
  return `
          <div class="item col--${column} row--${row}">
            <img src="images/${number}.jpg" alt="Picure of ${generateAlt(number)}">
            <div class="item__overlay">
              <button class="item__button">View &rarr;</button>
            </div>
          </div>
        `;
}

// create an array with 50 items containing an array of 2 numbers ranging from 1-4
const digits = Array.from({ length: 50 }, () =>
[randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

// User-interface or (front-end) logic:
const gallery = document.querySelector('.gallery');

// generate html
const html = digits.map(generateHtml).join('');
gallery.innerHTML = html;
