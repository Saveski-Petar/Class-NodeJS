import ArtistServices from '../services/artist.services.js'

export default class ArtistController {
  static async addNewArtist(req, res) {
    try {
      const newArtist = await ArtistServices.addNewArtist(req.body)
      res.status(201).send(newArtist)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
  static async getArtist(req, res) {
    try {
      const name = req.params.name

      if (name) {
        const artist = await ArtistServices.searchedArtist(name)
        res.status(200).send(artist)
      } else {
        const artists = await ArtistServices.getAllArtists()
        res.status(200).send(artists)
      }
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
}
