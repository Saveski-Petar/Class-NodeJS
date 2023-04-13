import SongServices from '../services/songs.services.js'
export default class SongController {
  static async addNewSong(req, res) {
    try {
      const newSong = await SongServices.addNewSong(req.body)
      res.status(201).send(newSong)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
  static async getSong(req, res) {
    try {
      const title = req.params.title

      if (title) {
        const song = await SongServices.getSongByTitle(title)

        res.status(200).send(song)
      } else {
        const songs = await SongServices.getSongs(req.query)
        res.status(200).send(songs)
      }
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
}
