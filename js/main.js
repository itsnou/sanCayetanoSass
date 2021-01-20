const header= document.querySelector('.main-nav');
window.addEventListener('scroll', ()=>{
    const scrollPos= window.scrollY;
    if(scrollPos>100){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})