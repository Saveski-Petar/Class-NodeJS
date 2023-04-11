import { Schema, model } from "mongoose";

const AlbumSchema = new Schema({
  AlbumName: {
    type: String,
    required: [true, "Album name is required"],
    min: 5,
  },
});

const Album = model("Album", AlbumSchema);

export default Album;
