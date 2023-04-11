import ArtistServices from "../services/artist.services.js";

export default class ArtistController {
  static async addNewArtist(req, res) {
    try {
      const newArtist = await ArtistServices.addNewArtist(req.body);
      res.status(201).send(newArtist);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async getArtists(req, res) {
    try {
      const name = req.body.name;

      if (name) {
        const artist = await ArtistServices.getArtistByName(name);
        res.status(200).send(artist);
      } else {
        const artists = await ArtistServices.getAllArtists();
        res.status(200).send(artists);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async updateSongs(req, res) {
    try {
      const artistID = req.params.id;

      const songs = req.body.songs;

      console.log("Name Artist controller", artistID);
      console.log(songs);

      const updateSongs = await ArtistServices.updateSongs(artistID, songs);
      res.status(200).send(updateSongs);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
