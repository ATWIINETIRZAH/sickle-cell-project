"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", wbc: 186, hgb: 80 },
  { month: "February", wbc: 305, hgb: 200 },
  { month: "March", wbc: 237, hgb: 120 },
  { month: "April", wbc: 73, hgb: 190 },
  { month: "May", wbc: 209, hgb: 130 },
  { month: "June", wbc: 214, hgb: 140 },
]

const chartConfig = {
  wbc: {
    label: "White Blood Cells",
    color: "hsl(var(--chart-1))",
  },
  hgb: {
    label: "Haemoglobin",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function PatientChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>WBC and HGB levels</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="wbc"
              type="monotone"
              stroke="var(--color-wbc)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="hgb"
              type="monotone"
              stroke="var(--color-hgb)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing WBC and HGB levels over time
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
