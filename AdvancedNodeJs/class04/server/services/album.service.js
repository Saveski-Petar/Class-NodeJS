import Album from "../models/album.model.js";

export default class AlbumServices {
  static async addNewAlbum(newAlbumInfo) {
    const newAlbum = new Album(newAlbumInfo);

    const addedNewAlbum = await newAlbum.save();

    return addedNewAlbum;
  }

  static async getAlbumByName(albumName) {
    const album = await Album.findById(albumName);

    if (!album) throw new Error(`Album with name of ${albumName} is not found`);

    return album;
  }

  static async getAllAlbums() {
    const albums = await Album.find({});

    if (albums.length === 0) throw new Error("No Albums are found in database");

    return albums;
  }
}
