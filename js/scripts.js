// return a random number between 1 and a limit
function randomNumber (limit) {
  return Math.floor(Math.random() * limit) + 1;
}

// generate html based on passed in width and heights
function generateHtml ([h, v]) {
  return `
          <div class="item h${h} v${v}">
            <img src="images/${randomNumber(12)}.jpg">
            <div class="item__overlay">
              <button class="item__button">View &rarr;</button>
            </div>
          </div>
        `;
}

// create an array with 50 items containing an array of 2 numbers ranging from 1-4
const digits = Array.from({ length: 50 }, () =>
[randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);
// generate html
const html = digits.map(generateHtml).join('');

const gallery = document.querySelector('.gallery');
gallery.innerHTML = html;
