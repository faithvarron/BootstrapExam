$(function() {
    $('.product-carousel').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        stagePadding: 50,
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            879: {
                items: 1
            },
            880: {
                items: 2
            },
            1099: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    })
})