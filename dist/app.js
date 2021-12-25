const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const content = document.querySelectorAll('blockquote');
const img = document.querySelectorAll('.img');
const footer = document.querySelectorAll('.text-footer');

console.log(footer)
let slideIndex = 2;
slideElements(slideIndex);


btnNext.addEventListener('click', function() {
    slideElements(slideIndex += 1);
})

btnPrev.addEventListener('click', function() {
    slideElements(slideIndex -= 1);
})





function slideElements(index) {

    if(index > img.length) { slideIndex = 1; }
    if(index < 1) { slideIndex = img.length; }
    
    for(let i = 0; i < img.length; i++) {
      img[i].style.display = 'none';

    
    }
    for(let i = 0; i < content.length; i++) {

        content[i].style.display = 'none';
    }
    for(let i = 0; i < footer.length; i++) {

        footer[i].style.display = 'none';
    }
    
    img[slideIndex -1].style.display = 'block';
    content[slideIndex -1].style.display = 'block';
    footer[slideIndex -1].style.display = '';
}