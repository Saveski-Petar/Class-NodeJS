import Artist from '../models/artists.models.js'

export default class ArtistServices {
  static async addNewArtist(newArtistInfo) {
    newArtistInfo.name = newArtistInfo.name.toUpperCase()
    const newArtist = new Artist(newArtistInfo)

    const addArtist = await newArtist.save()

    return addArtist
  }
  static async searchedArtist(artistName) {
    const artist = await Artist.findOne({
      name: artistName.toUpperCase(),
    }).populate('songs')

    if (!artist) throw new Error('Artist not found')

    return artist
  }
  static async getAllArtists() {
    const artists = await Artist.find()

    if (artists.length === 0) throw new Error('Artist not found in database')

    return artists
  }
}
