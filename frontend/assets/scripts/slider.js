window.addEventListener('load', function(){
    const carLista = document.querySelector('.carousel__lista');
    new Glider(carLista, {
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        }
    });
})