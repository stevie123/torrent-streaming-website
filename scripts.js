const magnetInput = document.getElementById("magnet-input");
const playButton = document.getElementById("play-button");
const videoContainer = document.getElementById("video-container");

playButton.addEventListener("click", () => {
    const magnetURI = magnetInput.value.trim();
    if (!magnetURI) {
        alert("Please enter a valid magnet link.");
        return;
    }
    playTorrent(magnetURI);
});

function playTorrent(magnetURI) {
    const client = new WebTorrent();

    client.add(magnetURI, (torrent) => {
        const file = torrent.files.find((file) => file.name.endsWith(".mp4"));

        if (!file) {
            alert("No suitable video file found in the torrent.");
            return;
        }

        file.renderTo("video", {
            autoplay: true,
            controls: true,
        }, (err) => {
            if (err) {
                console.error(err);
                alert("An error occurred while playing the video.");
            }
        });
    });
}




