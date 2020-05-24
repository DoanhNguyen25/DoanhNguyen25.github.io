const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');


//button
const preBtn = document.getElementById('prebtn');
const nextBtn = document.getElementById('nextbtn');

//size
let count = 1;
const size = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * count) + 'px)';

///button listeners

nextBtn.addEventListener('click', () => {
    if(count >= images.length-1) return;
    count++;
    slide.style.transform = 'translateX(' + (-size * count) + 'px)';
    if(images[count].id === 'firstclone')
    {
        count = 1;
        slide.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
})

preBtn.addEventListener('click', () => {
    if(count <= 0 ) return;
    count--;
    slide.style.transform = 'translateX(' + (-size * count) + 'px)';
    if(images[count].id === 'lastclone')
    {
        count = images.length-2;
        slide.style.transform = 'translateX(' + (-size * count) + 'px)';
    }

})
