const icon = document.querySelector('.menu__icon');
const menu = document.querySelector('nav');

if(icon){
    icon.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        icon.classList.toggle('_active');
        menu.classList.toggle('_active');
    })
}

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('header').offsetHeight;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        if(icon.classList.contains('_active')){
            document.body.classList.remove('_lock');
            icon.classList.remove('_active');
            menu.classList.remove('_active');
        }

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

