import AlbumServices from '../services/albums.services.js'

export default class AlbumController {
  static async addNewAlbum(req, res) {
    try {
      const newAlbum = await AlbumServices.addNewAlbum(req.body)
      res.status(201).send(newAlbum)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
  static async getAlbum(req, res) {
    try {
      const album = await AlbumServices.getAlbumByName(req.params.albumName)
      res.status(200).send(album)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
}
