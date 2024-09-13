

document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const closeBtn = document.querySelector('.close');
    let currentIndex = 0;

    const descriptions = [
        "This image shows a cute, baby-like depiction of Lord Krishna with big, expressive eyes and a gentle smile. He has a blue complexion, is adorned with jewelry and flowers, and is set against a peaceful, nature-inspired background. The art exudes innocence and divine charm",
        "This image portrays a loving mother, Yashoda, holding baby Krishna in her arms. Krishna is adorned with traditional jewelry, looking playful and divine, while Yashoda lovingly points towards something in the distance. The background features a peaceful, natural setting, enhancing the warmth and affection in the scene.",
        "This image shows a playful depiction of young Lord Krishna, joyfully running with a calf beside him. Krishna is adorned with a crown, jewelry, and a small dhoti, holding a staff in one hand. The background features a warm, golden light, adding to the lively and divine atmosphere of the scene.",
        "This image shows a young Krishna sitting under a tree, smiling sweetly with a calf by his side. He is adorned with jewelry and a peacock feather in his hair, looking peaceful and content in the serene, natural setting. The scene beautifully captures the bond between Krishna and the calf.",
        "This image shows Krishna and Radha sitting closely together under a tree, sharing a tender moment. Radha rests her head on Krishna's shoulder, while a peacock stands nearby, adding to the beauty of the scene. The background is vibrant and colorful, creating a romantic and peaceful atmosphere.",
        "This image shows young Krishna and Radha in a tender moment. Krishna is gently holding Radha's foot as she sits gracefully, both dressed in royal attire with crowns and jewelry. The background is illuminated with soft, colorful light, creating a peaceful and loving atmosphere. The scene beautifully captures their innocent love and devotion.",
        "This image shows adorable, animated depictions of young Lord Rama and Sita sitting together in a forest. They are wearing crowns and traditional clothes, with hands folded in prayer, facing a Shivling (a symbol of Lord Shiva) adorned with flowers. The peaceful forest setting is bathed in soft, natural light, creating a serene and devotional atmosphere.",
        "This image beautifully depicts Lord Krishna standing among several Gopis (female devotees), who are all dressed in colorful traditional attire. Krishna is in the center, holding a flute, while the Gopis lovingly surround him, some offering garlands and others playing musical instruments. The scene is set in a lush garden with trees, flowers, and peacocks, creating a vibrant and joyful atmosphere."
    ];

    function showLightbox(index) {
        currentIndex = index;
        lightboxImg.src = thumbnails[index].src;
        caption.textContent = descriptions[index];
        lightbox.style.display = "block";
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        showLightbox(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        showLightbox(currentIndex);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => showLightbox(index));
    });

    next.addEventListener('click', showNext);
    prev.addEventListener('click', showPrev);

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});





