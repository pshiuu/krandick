export const headerScroll = () => {
    const nav = document.querySelector('.nav_fixed');
    
    const handleScroll = () => {
        if (window.scrollY > 0) {
            nav?.classList.add('is-scrolled');
        } else {
            nav?.classList.remove('is-scrolled');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page is loaded scrolled
    handleScroll();
}
