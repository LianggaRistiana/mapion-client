import mongoose from "mongoose";
import dbConnect from "@/lib/mongodb";
import Location from "@/models/Location";

const seedData = [
  { title: "INV001", desc: "Paid", lat: -8.4095, lng: 115.1889 },
  { title: "INV002", desc: "Unpaid", lat: -6.2088, lng: 106.8456 },
  { title: "INV003", desc: "Pending", lat: -7.2504, lng: 112.7688 },
  { title: "INV004", desc: "Failed", lat: -0.7893, lng: 113.9213 },
  { title: "INV005", desc: "Processing", lat: -3.3194, lng: 114.5908 },
  { title: "INV006", desc: "Shipped", lat: -2.5489, lng: 118.0149 },
  { title: "INV007", desc: "Delivered", lat: -1.2654, lng: 116.8312 },
  { title: "INV008", desc: "Returned", lat: -5.1477, lng: 119.4327 },
  { title: "INV009", desc: "Cancelled", lat: -7.9839, lng: 112.6214 },
  { title: "INV010", desc: "Completed", lat: -6.9149, lng: 107.6081 },
];

async function seedDB() {
  try {
    await dbConnect();
    await Location.deleteMany(); // Hapus semua data sebelum seeding
    await Location.insertMany(seedData);
    console.log("Seeding successful!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}

seedDB();
