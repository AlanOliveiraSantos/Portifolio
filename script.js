document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    document.querySelectorAll('.fade-inx , .fade-iny').forEach(function(element) {
        observer.observe(element);
    });
});
