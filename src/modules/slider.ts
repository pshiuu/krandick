

export const Slider = () => {
    var animation = { duration: 25000, easing: (t) => t }

    var marqueeLeftRight = new KeenSlider("#marquee-left-right", {
      loop: true,
      renderMode: "performance",
      drag: false,
      slides: {
        perView: 4,
        spacing: 16,
      },
      created(s) {
        s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      breakpoints: {
        '(max-width: 768px)': {
          slides: {
            perView: 2.5,
            spacing: 16,
          },
        },
        '(max-width: 500px)': {
          slides: {
            perView: 1.5,
            spacing: 16,
          },
        },
      },
    })

    var marqueeRightLeft = new KeenSlider("#marquee-right-left", {
        loop: true,
        renderMode: "performance",
        drag: false,
        rtl: true,
        slides: {
          perView: 4,
          spacing: 16,
        },
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        breakpoints: {
          '(max-width: 768px)': {
            slides: {
              perView: 2.5,
              spacing: 16,
            },
          },
          '(max-width: 500px)': {
            slides: {
              perView: 1.5,
              spacing: 16,
            },
          },
        },
      })
}