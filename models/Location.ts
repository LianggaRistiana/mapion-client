import mongoose, { Schema, model, models } from "mongoose";

const LocationSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
}, { timestamps: true });

const Location = models.Location || model("Location", LocationSchema);

export default Location;
