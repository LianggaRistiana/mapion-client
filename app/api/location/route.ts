// import { NextResponse } from 'next/server';
// import { getLocations, createLocation } from '@/lib/db/location';

// export async function GET() {
//   const locations = await getLocations();
//   return NextResponse.json(locations);
// }

// export async function POST(req: Request) {
//   try {
//     const { title, desc, lat, lng } = await req.json();
//     if (!title || !desc || lat == null || lng == null) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     const newLocation = await createLocation(title, desc, lat, lng);
//     return NextResponse.json(newLocation, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Location from "@/models/Location";

export async function GET() {
  try {
    await dbConnect();
    const locations = await Location.find();
    return NextResponse.json(locations);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch locations" }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    // Validasi data (pastikan lat & lng ada)
    if (!body.title || !body.lat || !body.lng) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newLocation = new Location(body);
    await newLocation.save();

    return NextResponse.json(
      { message: "Location added successfully", location: newLocation },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add location" },
      { status: 500 }
    );
  }
}