document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('reading-progress-bar');
    if (!progressBar) return;

    const updateProgressBar = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
    };
    
    window.addEventListener('scroll', updateProgressBar);
});