import { Schema, model } from 'mongoose'

const SongSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Name of the song is required'],
    min: 5,
  },
  genre: {
    type: String,
    required: [true, 'Genre of the song is required'],
    minLength: 3,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: 'Album',
  },
})

const Song = model('Song', SongSchema)

export default Song
