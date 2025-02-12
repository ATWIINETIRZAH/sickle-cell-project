import { columns, Patient } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Patient[]> {
  // Fetch data from your API here.
  return [
    {
      id: "2",
      contact: "0789456123",
      gender: "F",
      name: "Grace",
    },
    {
      id: "3",
      contact: "0701234567",
      gender: "M",
      name: "James",
    },
    {
      id: "4",
      contact: "0778899000",
      gender: "F",
      name: "Linda",
    },
    {
      id: "5",
      contact: "0753322114",
      gender: "M",
      name: "Michael",
    },
    {
      id: "6",
      contact: "0798765432",
      gender: "F",
      name: "Sophia",
    },
    {
      id: "7",
      contact: "0711122233",
      gender: "M",
      name: "Daniel",
    },
    {
      id: "8",
      contact: "0787654321",
      gender: "F",
      name: "Emily",
    },
    {
      id: "9",
      contact: "0700987654",
      gender: "M",
      name: "John",
    },
    {
      id: "10",
      contact: "0765432109",
      gender: "F",
      name: "Alice",
    },
    {
      id: "11",
      contact: "0743210987",
      gender: "M",
      name: "Victor",
    },
  ];
}

export default async function Patients() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
