export const gsapAnimations = () => {
    // Check if screen width is greater than 975px
    const shouldAnimate = window.matchMedia('(min-width: 976px)').matches;
    
    // Only run animations if screen is large enough
    if (!shouldAnimate) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Keywords sliding up animation
    gsap.fromTo(
        ".home-keyword",
        {
            opacity: 0,
            y: 50 // Start 50px below final position
        },
        {
            opacity: 1,
            y: 0, // Move to final position
            duration: 0.8,
            stagger: {
                amount: 1.2,
            },
            ease: "back.out(1.7)" // Adds a slight bounce effect
        }
    )

    // First wrapper sliding from left
    gsap.fromTo(
        ".home-kw-wrap.is-left",
        {
            opacity: 0,
            x: -200 // Start 100px left of final position
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out"
        }
    )

    // Second wrapper sliding from right
    gsap.fromTo(
        ".home-kw-wrap.is-right",
        {
            opacity: 0,
            x: 200 // Start 100px right of final position
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out"
        }
    )

    // Leistungen section animations
    // Text header animation
    gsap.fromTo(
        ".leistungen-text-wrap",
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".section_leistungen",
                start: "top 70%",
                end: "top top",
                toggleActions: "play reverse play reverse",
            }
        }
    )

    // Grid items animations
    // First image - from left
    gsap.fromTo(
        ".l-img-wap:nth-child(1)",
        {
            opacity: 0,
            x: -100
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".leistungen-grid",
                start: "top 70%",
                end: "75% top",
                toggleActions: "play reverse play reverse",
            }
        }
    )

    // Second image - from top
    gsap.fromTo(
        ".l-img-wap:nth-child(2)",
        {
            opacity: 0,
            y: -100
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".leistungen-grid",
                start: "top 70%",
                end: "75% top",
                toggleActions: "play reverse play reverse",
            }
        }
    )

    // Third image - from right
    gsap.fromTo(
        ".l-img-wap:nth-child(3)",
        {
            opacity: 0,
            x: 100
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".leistungen-grid",
                start: "top 70%",
                end: "75% top",
                toggleActions: "play reverse play reverse",
            }
        }
    )

    // Text blocks - from bottom with stagger
    gsap.fromTo(
        ".l-block-text",
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".leistungen-grid",
                start: "top 70%",
                end: "75% top",
                toggleActions: "play reverse play reverse",
            }
        }
    )

    
    // Working section animations
    // Text header animation
    gsap.fromTo(
        ".working-text-wrap",
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".section_working",
                start: "top 70%",
                end: "top top",
                toggleActions: "play reverse play reverse"
            }
        }
    )

    // Work blocks animation with stagger
    gsap.fromTo(
        ".work-block",
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".working-wrap",
                start: "top 70%",
                end: "top top",
                toggleActions: "play reverse play reverse"
            }
        }
    )


}