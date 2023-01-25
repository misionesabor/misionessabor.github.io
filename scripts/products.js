// new Glide('.glide').mount();
var glide = new glide('.glide', {
    perView: 4,
    type: "carousel",
    autoplay: 3000,
    gap: 24,
    breakpoints: {
        500: {
            perView: 1,
            gap: 0
        },
        767: {
            perView: 2
        },
        991: {
            perView: 3
        },
        1200: {
            perView: 4
        }
    }
});
glide.mount();