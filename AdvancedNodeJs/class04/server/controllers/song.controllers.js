import SongServices from "../services/song.services.js";

export default class SongControllers {
  static async addNewSong(req, res) {
    try {
      const newSong = await SongServices.addNewSong(req.body);
      res.status(201).send(newSong);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async getSong(req, res) {
    try {
      const name = req.body.name;
      if (name) {
        const song = await SongServices.getSongByName(name);
        res.status(200).send(song);
      } else {
        const songs = await SongServices.getSongs(req.query);
        res.status(200).send(songs);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
