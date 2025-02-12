"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export type Patient = {
  id: string;
  name: string;
  gender: "M" | "F";
  contact: string;
};

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "contact",
    header: "Contact",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <Link href={`/dashboard/patients/${patient.id}`}>
          <Button variant={"link"}>View</Button>
        </Link>
      );
    },
  },
];
