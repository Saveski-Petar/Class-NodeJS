import Artist from "../models/artists.model.js";
import SongServices from "./song.services.js";

export default class ArtistServices {
  static async addNewArtist(newArtistInfo) {
    const newArtist = new Artist(newArtistInfo);

    const addArtist = await newArtist.save();

    return addArtist;
  }
  static async getArtistByName(artistName) {
    const artist = await Artist.find(artistName).populate("song", "-artist");

    if (!artist)
      throw new Error(`Artist with the name ${artistName} doesn't exist`);

    return artist;
  }
  static async getAllArtists() {
    const artists = await Artist.find({});

    if (artists.length === 0)
      throw new Error("No Artists found in the database");

    return artists;
  }

  static async updateSongs(artistID, songs) {
    const artist = await Artist.findById(artistID);
    console.log("Artist", artist);

    if (!artist)
      throw new Error(`Artist with the name ${artistID} doesn't exist`);

    artist.songs = songs;

    for (const id of songs) {
      await SongServices.updateSong(id, { artist: artistID });
    }
    await artist.save();
    return artist;
  }
}
