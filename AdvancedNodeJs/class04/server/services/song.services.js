import Song from "../models/song.model.js";

export default class SongServices {
  static async addNewSong(newSongInfo) {
    const newSong = new Song(newSongInfo);

    const addSong = await newSong.save();

    return addSong;
  }

  static async getSongByName(songName) {
    const song = await Song.findById(songName).populate("artist");

    if (!song) throw new Error(`Song with id of ${songName} doesn't exist`);

    return song;
  }
  static async getSongs(query) {
    let songs = await Song.find({});

    if (songs.length === 0) throw new Error("No songs found in the database");

    if (query?.genre) {
      songs = songs.filter(
        (songs) => songs.genre.toLowerCase() === query.genre.toLowerCase()
      );

      if (songs.length === 0)
        throw new Error(`We don't have songs with ${query.genre}`);
    }

    if (query?.artist) {
      songs = songs.filter(
        (songs) => songs.artist.toLowerCase() === query.artist.toLowerCase()
      );
      if (songs.length === 0)
        throw new Error(`We don't have songs with ${query.artists}`);
    }

    return songs;
  }
  static async updateSong(id, songInfo) {
    const song = await Song.findById(id);

    if (!song) throw new Error(`Song  ${id} doesn't exist`);

    const keys = Object.keys(songInfo);
    keys.forEach((key) => {
      if (key !== "_id" && key !== "__v") {
        song[key] = songInfo[key];
      }
    });

    await song.save();
    return song;
  }
}
