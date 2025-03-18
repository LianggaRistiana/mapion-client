import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// const locations = [
//   {
//     id: 1,
//     title: "Taman Kota",
//     desc: "Taman dengan banyak pepohonan dan jogging track",
//     lat: -8.6705,
//     lng: 115.2121,
//   },
//   {
//     id: 2,
//     title: "Pantai Indah",
//     desc: "Pantai berpasir putih dengan pemandangan sunset",
//     lat: -8.709,
//     lng: 115.1782,
//   },
//   {
//     id: 3,
//     title: "Gunung Sejuk",
//     desc: "Gunung tinggi dengan udara dingin dan hutan pinus",
//     lat: -8.6567,
//     lng: 115.2423,
//   },
// ];

type Location = {
  id: number;
  created_at: string;
  title: string;
  desc: string;
  lat: number;
  lng: number;
};

type LocationTableProps = {
  locations: Location[];
  onRowClick?: (location: Location) => void;
};

export function LocationTable({ locations, onRowClick }: LocationTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Desc</TableHead>
          <TableHead>Lattitude</TableHead>
          <TableHead>Longttitude</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {locations.map((location) => (
          <TableRow key={`${location.lat}-${location.lng}-${crypto.randomUUID()}`} onClick={() => onRowClick?.(location)}>
            <TableCell>{location.title}</TableCell>
            <TableCell>{location.desc}</TableCell>
            <TableCell>{location.lat}</TableCell>
            <TableCell>{location.lng}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
