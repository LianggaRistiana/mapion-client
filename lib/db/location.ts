import sql from './db';

export async function getLocations() {
  return await sql`
    SELECT id, created_at, title, desc, lat, lng
    FROM location
  `;
}

export async function createLocation(title: string, desc: string, lat: number, lng: number) {
  return await sql`
    INSERT INTO location (title, desc, lat, lng)
    VALUES (${title}, ${desc}, ${lat}, ${lng})
    RETURNING *;
  `;
}
