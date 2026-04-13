// OCU Coffee Shop - MVP Script
const apiKey = "mlsfeDvpmNbAsYkTfCo4dLEtBIrgztAC";

// Event listener for the surprise button
document.getElementById('btnSurprise').addEventListener('click', function() {
    const apiResult = document.getElementById('apiResult');

    // Fetching random coffee GIF from Giphy API
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=coffee&rating=g`)
        .then(response => response.json())
        .then(json => {
            // Updating the DOM with the API data
            apiResult.innerHTML = `
                <p class="text-muted">Enjoy this coffee vibe:</p>
                <img src="${json.data.images.downsized.url}" class="img-fluid rounded shadow-sm">
            `;
        })
        .catch(err => {
            apiResult.innerHTML = "<p class='text-danger'>Error loading API. Please try again.</p>";
            console.error("API Error: ", err);
        });
});