import Album from '../models/albums.model.js'

export default class AlbumServices {
  static async addNewAlbum(albumInfo) {
    const newAlbum = new Album(albumInfo)

    const addAlbum = await newAlbum.save()

    return addAlbum
  }

  static async getAlbumByName(albumName) {
    const album = await Album.find({ AlbumName: albumName })
      .populate('artist')
      .populate('songs')

    if (!album) throw new Error('Album not found')

    return album
  }
}
