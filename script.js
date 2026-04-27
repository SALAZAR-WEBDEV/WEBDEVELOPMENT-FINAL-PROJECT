const apiKey = "mlsfeDvpmNbAsYkTfCo4dLEtBIrgztAC";

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnSurprise');
    const result = document.getElementById('apiResult');

    if (btn) {
        btn.addEventListener('click', () => {
            result.innerHTML = '<div class="spinner-border text-success" role="status"></div>';

            fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=coffee&rating=g`)
                .then(res => res.json())
                .then(json => {
                    result.innerHTML = `
                        <img src="${json.data.images.downsized.url}" class="img-fluid rounded shadow animate-fade-in" style="max-height: 300px;">
                    `;
                })
                .catch(() => {
                    result.innerHTML = '<p class="text-danger">Failed to load surprise!</p>';
                });
        });
    }
});