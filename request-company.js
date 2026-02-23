document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('requestOverlay');
    const openBtn = document.getElementById('requestCompanyBtn');
    const closeBtn = document.getElementById('requestPopupClose');
    const form = overlay.querySelector('form');
    const submitBtn = document.getElementById('rcSubmitBtn');

    // Open popup
    openBtn.addEventListener('click', function () {
        overlay.classList.add('active');
    });

    // Close popup via × button
    closeBtn.addEventListener('click', function () {
        overlay.classList.remove('active');
    });

    // Close popup by clicking the backdrop
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.classList.remove('active');
        }
    });

    // Submit form via AJAX (same approach as mail.js)
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        fetch('https://formsubmit.co/ajax/badhon495@gmail.com', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                form.reset();
                submitBtn.value = 'Request Sent!';
                submitBtn.disabled = true;
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
