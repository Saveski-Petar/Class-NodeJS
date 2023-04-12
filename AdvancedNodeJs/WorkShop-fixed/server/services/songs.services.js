import Song from '../models/songs.model.js'

export default class SongService {
  static async addNewSong(newSongInfo) {
    newSongInfo.title = newSongInfo.title.toUpperCase()

    const newSong = new Song({
      title: newSongInfo.title,
      genre: newSongInfo.genre,
      artist: newSongInfo.artist,
      album: newSongInfo.album,
    })

    const addSong = await newSong.save()

    return addSong
  }

  static async getSongByTitle(songTitle) {
    const song = await Song.findOne({
      title: songTitle.toUpperCase(),
    }).populate('artist')

    if (!song)
      throw new Error(`Song with the this title ${songTitle} is not found `)

    return song
  }
  static async getSongs(query) {
    let songs = await Song.find({})

    if (songs.length === 0) throw new Error('No songs found in database')

    if (query?.genre) {
      songs = await Song.find({ genre: query.genre })

      if (songs.length === 0) throw new Error('No songs found in database')
    }

    if (query?.artist) {
      songs = await Song.find({ artist: query.artist })

      if (songs.length === 0) throw new Error('No songs found in database')
    }

    return songs
  }
}
