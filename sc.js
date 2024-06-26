const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.header-text h2',{delay:150, origin: 'top'});
sr.reveal('header-text h3 span',{delay:250, origin: 'bottom'});
sr.reveal('header-text h4',{delay:400, origin: 'left'});
sr.reveal('.container', {
    delay:400, origin: 'top',
});