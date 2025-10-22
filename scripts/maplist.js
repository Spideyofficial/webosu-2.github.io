async function loadBeatmaps() {
    try {
        const response = await fetch('/maps/beatmaps.json');
        const data = await response.json();
        return data.beatmaps;
    } catch (error) {
        console.error('Error loading beatmaps:', error);
        return [];
    }
}

async function displayBeatmaps() {
    const beatmaps = await loadBeatmaps();
    const container = document.getElementById('beatmap-container');
    container.innerHTML = '';

    beatmaps.forEach(map => {
        const mapElement = document.createElement('div');
        mapElement.className = 'beatmap-item';
        mapElement.innerHTML = `
            <img src="${map.backgroundUrl}" alt="${map.title}" class="beatmap-bg">
            <div class="beatmap-info">
                <h3>${map.title}</h3>
                <p>Mapper: ${map.creator}</p>
                <p>Difficulty: ${map.difficulty}</p>
                <a href="${map.downloadUrl}" class="download-btn">Download</a>
            </div>
        `;
        container.appendChild(mapElement);
    });
}

// Initialize the beatmap display when the page loads
document.addEventListener('DOMContentLoaded', displayBeatmaps);
