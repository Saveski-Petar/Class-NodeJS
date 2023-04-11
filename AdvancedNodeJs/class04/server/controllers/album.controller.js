import AlbumServices from "../services/album.service.js";

export default class AlbumController {
  static async addNewAlbum(req, res) {
    try {
      const newAlbum = await AlbumServices.addNewAlbum(req.body);
      res.status(201).send(newAlbum);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async getAlbum(req, res) {
    try {
      const name = req.body.name;

      if (name) {
        const album = await AlbumServices.getAlbumByName(name);
        res.status(200).send(album);
      } else {
        const albums = await AlbumServices.getAllAlbums();
        res.status(200).send(albums);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
