const form = document.querySelector('form');
const button = document.querySelector('button');


button.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('span').innerText = form.rating.value;
    document.getElementById('rating').style.display = 'none';
    document.getElementById('display').style.display = 'contents';
});

// const input1 = document.querySelector('#rating1')

// input1.addEventListener('click', function () {
//     document.querySelector('.radio-btn').innerText = '';
//     document.querySelector()
// })
