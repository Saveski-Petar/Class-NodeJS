import { Schema, model } from "mongoose";

const ArtistSchema = new Schema({
  name: {
    type: String,
    min: 3,
    required: [true, "Name is required"],
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});

const Artist = model("Artist", ArtistSchema);

export default Artist;
