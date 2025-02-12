"use client";

import { PatientChart } from "@/components/patient-chart";
import { PredictionsChart } from "@/components/predictions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { UploadDropzone } from "@/lib/uploadthing";
import { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <PatientChart />
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Patient Info</CardTitle>
            </CardHeader>
            <CardContent className="text-lg font-semibold">
              <p>Id: {id}</p>
              <p>Name: Sammy</p>
              <p>Contact: 0758441520</p>
              <p>Next appointment: 25/02/25</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Upload Report</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Upload Report</DialogTitle>
                    <DialogDescription>
                      Upload Patients Report
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <UploadDropzone
                      endpoint={"reportUploader"}
                      onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res);
                        alert("Upload Completed");
                      }}
                      onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-full">
          <PredictionsChart />
        </div>
      </div>
    </div>
  );
}
