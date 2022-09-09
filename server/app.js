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


// GET ALL ARTISTS

app.get("/artists", (req, res) => {
  const artists = getAllArtists();
  res.json({ body: artists });
});


// GET ARTIST

app.get("/artists/:artistid", (req, res) => {
  const artist = getArtistByArtistId(req.params.artistid)
  res.json({artist})
})

// GET NEW ARTIST

app.get("/artists/latest", (req, res) => {
  const latestArtists = getLatestArtist();
  res.json({ body: latestArtists });
});


// GET NEW ARTIST AND THEIR ALBUMS

app.get("/artists/latest/albums", (req, res) => {
  const latestArtistAlbums = getAlbumsForLatestArtist();
  res.json({ body: latestArtistAlbums });
});


// ADD NEW ARTIST

app.post("/artists", (req, res) => {
  const artist = req.body
  const newArtist = addArtist(artist);
  res.status(201);
  res.json(newArtist);
});

// EDIT ARTIST

app.patch("/artists/:artistid", (req, res) => {
  const artist  = editArtistByArtistId(req.params.artistid, {"name": "Led Zeppelin"})
  res.json(artist)
})

// DELETE ARTIST

app.delete("/artists/:artistid", (req, res) => {
  const artist = deleteArtistByArtistId(req.params.artistid)
  res.json({message: "successfully deleted"})
})

// GET ARTIST ALBUMS

app.get("/artists/:artistid/albums", (req, res) => {
  const artistAlbums = getAlbumsByArtistId(req.params.artistid)
  res.json(artistAlbums)
})

// GET ALBUM DETAILS

app.get("/albums/:albumid", (req, res) => {
  const album = getAlbumByAlbumId(req.params.albumid)
  res.json(album)
})

// ADD ALBUM TO ARTIST

app.post("/albums/:artistId/album", (req, res) => {
  const albumDetails = req.body
  const artistId = req.params.artistId
  const newAlbum = addAlbumByArtistId(artistId, albumDetails)
  res.json(newAlbum)
})

// EDIT ALBUM DETAILS

app.patch("/albums/:albumId", (req, res) => {
  const newAlbumDetails = req.body
  const albumId = req.params.albumId
  const updateAlbum = editAlbumByAlbumId(albumId, newAlbumDetails)
  res.json(updateAlbum)
})

// DELETE

app.delete("/albums/:albumId", (req, res) => {
  const deletedAlbum = deleteAlbumByAlbumId(req.params.albumId)
  res.json({"message": "Successfully Deleted"})
})

//GET ALL ALBUM
app.get("/albums", (req, res) => {
  const queries = req.query.startWith
  const filteredAlbum = getFilteredAlbums(queries)
  res.json(filteredAlbum)
})

// GET ALL SONGS OF AN ARTIST

app.get("/artists/:artistId/songs", (req, res) => {
  const artistSongs = getSongsByArtistId(req.params.artistId)
  res.json(artistSongs)
})

// GET ALL SONGS ON AN ALBUM

app.get("/albums/:albumId/songs", (req, res) => {
  const songsInAlbum = getSongsByAlbumId(req.params.albumId)
  res.json(songsInAlbum)
})


// GET SONGS DETAILS

app.get("/songs/:songId", (req, res) => {
  const song = getSongBySongId(req.params.songId)
  res.json(song)
})

// ADD SONG TO AN ALBUM

app.post("/albums/:albumID/songs", (req, res) => {
  const song = {
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1
  }
  const album = addSongByAlbumId(req.params.albumID, song )
  res.json(album)
})

// EDIT A SONG FROM AN ALBUM

app.put("/songs/:songId", (req, res) => {
  const songData = req.body
  const song = editSongBySongId(req.params.songId, songData)
  res.json(songData)
})

// DELETE A SONG BY SONGID

app.delete("/songs/:songId", (req, res) => {
  const song = deleteSongBySongId(req.params.songId)
  res.json({"message": "Successfully Deleted"})
})

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));

