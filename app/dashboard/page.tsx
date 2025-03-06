

import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "@/components/overview";
import { RecentPatients } from "@/components/recent-patients";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Main Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Patients</CardTitle>
                <CardDescription>
                  You have 25 patients this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentPatients />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
