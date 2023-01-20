// new Glide('.glide').mount();

var glide = new Glide('.glide', {
    perView: 4,
    type: "carousel",
    autoplay: 3000,
    gap: 24,
    breakpoints: {
        767: {
            perView: 1,
            gap: 0
        }
    }
});
glide.mount();