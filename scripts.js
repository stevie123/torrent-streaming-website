const magnetInput = document.getElementById("magnet-input");
const playButton = document.getElementById("play-button");
const videoContainer = document.getElementById("video-container");

playButton.addEventListener("click", () => {
    const magnetURI = magnetInput.value.trim();
    if (!magnetURI) {
        alert("Please enter a valid magnet link.");
        return;
    }
  function playTorrent(magnetURI) {
  const client = new WebTorrent();

  client.add(magnetURI, (torrent) => {
    const file = torrent.files.find((file) => file.name.endsWith(".mp4"));

    if (!file) {
      alert("No suitable video file found in the torrent.");
      return;
    }

    file.appendTo(videoContainer, {
      autoplay: true,
      controls: true,
      maxBlobLength: 1000 * 1000 * 1000, // 1 GB
    }, (err) => {
      if (err) {
        console.error(err);
        alert("An error occurred while playing the video.");
      }
    });
  });

  client.on('error', (err) => {
    console.error('WebTorrent client error:', err);
    alert("An error occurred with the WebTorrent client.");
  });
}

        });
    });
}




