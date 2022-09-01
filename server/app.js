// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();

// Your code here
app.use(express.json());

app.get("/artists", (req, res) => {
  const artists = getAllArtists();
  res.json({ body: artists });
});

app.get("/artists/latest", (req, res) => {
  const latestArtists = getLatestArtist();
  res.json({ body: latestArtists });
});

app.get("/artists/latest/albums", (req, res) => {
  const latestArtistAlbums = getAlbumsForLatestArtist();
  res.json({ body: latestArtistAlbums });
});

app.post("/artists", (req, res) => {
  const newArtist = addArtist({ name: "Led Zeppelin" });
  res.status(201);
  res.json(newArtist);
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));

