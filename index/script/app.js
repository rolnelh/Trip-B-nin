// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const lieuxContainer = document.querySelector('.container');

// right.addEventListener('click', () => {
//     lieuxContainer.scrollRight= '200px';
// })

$(document).ready(function(){
    var container = $('.container');
    var scrollAmount = 400;

    $('#rightArrow').click(function(){
        container.animate({
            scrollLeft: '=+400'
        }, 500);
    });

    $('#leftArrow').click(function(){
        container.animate({
            scrollLeft: '=-400'
        }, 500);
    });

    container.scroll(function(){
        var scrollLeft = container.scrollLeft();
        var maxScroll = container.get(0).scrollWidth - container.width();

        $('#rightArrow').prop('disabled', scrollLeft >= maxScroll);
        $('#leftArrow').prop('disabled', scrollLeft <= 0);
    });
});
