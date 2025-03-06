

"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", current: 222, predicted: 150 },
  { date: "2024-04-02", current: 97, predicted: 180 },
  { date: "2024-04-03", current: 167, predicted: 120 },
  { date: "2024-04-04", current: 242, predicted: 260 },
  { date: "2024-04-05", current: 373, predicted: 290 },
  { date: "2024-04-06", current: 301, predicted: 340 },
  { date: "2024-04-07", current: 245, predicted: 180 },
  { date: "2024-04-08", current: 409, predicted: 320 },
  { date: "2024-04-09", current: 59, predicted: 110 },
  { date: "2024-04-10", current: 261, predicted: 190 },
  { date: "2024-04-11", current: 327, predicted: 350 },
  { date: "2024-04-12", current: 292, predicted: 210 },
  { date: "2024-04-13", current: 342, predicted: 380 },
  { date: "2024-04-14", current: 137, predicted: 220 },
  { date: "2024-04-15", current: 120, predicted: 170 },
  { date: "2024-04-16", current: 138, predicted: 190 },
  { date: "2024-04-17", current: 446, predicted: 360 },
  { date: "2024-04-18", current: 364, predicted: 410 },
  { date: "2024-04-19", current: 243, predicted: 180 },
  { date: "2024-04-20", current: 89, predicted: 150 },
  { date: "2024-04-21", current: 137, predicted: 200 },
  { date: "2024-04-22", current: 224, predicted: 170 },
  { date: "2024-04-23", current: 138, predicted: 230 },
  { date: "2024-04-24", current: 387, predicted: 290 },
  { date: "2024-04-25", current: 215, predicted: 250 },
  { date: "2024-04-26", current: 75, predicted: 130 },
  { date: "2024-04-27", current: 383, predicted: 420 },
  { date: "2024-04-28", current: 122, predicted: 180 },
  { date: "2024-04-29", current: 315, predicted: 240 },
  { date: "2024-04-30", current: 454, predicted: 380 },
  { date: "2024-05-01", current: 165, predicted: 220 },
  { date: "2024-05-02", current: 293, predicted: 310 },
  { date: "2024-05-03", current: 247, predicted: 190 },
  { date: "2024-05-04", current: 385, predicted: 420 },
  { date: "2024-05-05", current: 481, predicted: 390 },
  { date: "2024-05-06", current: 498, predicted: 520 },
  { date: "2024-05-07", current: 388, predicted: 300 },
  { date: "2024-05-08", current: 149, predicted: 210 },
  { date: "2024-05-09", current: 227, predicted: 180 },
  { date: "2024-05-10", current: 293, predicted: 330 },
  { date: "2024-05-11", current: 335, predicted: 270 },
  { date: "2024-05-12", current: 197, predicted: 240 },
  { date: "2024-05-13", current: 197, predicted: 160 },
  { date: "2024-05-14", current: 448, predicted: 490 },
  { date: "2024-05-15", current: 473, predicted: 380 },
  { date: "2024-05-16", current: 338, predicted: 400 },
  { date: "2024-05-17", current: 499, predicted: 420 },
  { date: "2024-05-18", current: 315, predicted: 350 },
  { date: "2024-05-19", current: 235, predicted: 180 },
  { date: "2024-05-20", current: 177, predicted: 230 },
  { date: "2024-05-21", current: 82, predicted: 140 },
  { date: "2024-05-22", current: 81, predicted: 120 },
  { date: "2024-05-23", current: 252, predicted: 290 },
  { date: "2024-05-24", current: 294, predicted: 220 },
  { date: "2024-05-25", current: 201, predicted: 250 },
  { date: "2024-05-26", current: 213, predicted: 170 },
  { date: "2024-05-27", current: 420, predicted: 460 },
  { date: "2024-05-28", current: 233, predicted: 190 },
  { date: "2024-05-29", current: 78, predicted: 130 },
  { date: "2024-05-30", current: 340, predicted: 280 },
  { date: "2024-05-31", current: 178, predicted: 230 }
]

const chartConfig = {
  visitors: {
    label: "Haemoglobin levels",
  },
  current: {
    label: "current",
    color: "hsl(var(--chart-1))",
  },
  predicted: {
    label: "predicted",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function PredictionsChart() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Haemoglobin predictions</CardTitle>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-current)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-current)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-predicted)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-predicted)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="current"
              type="natural"
              fill="url(#fillCurrent)"
              stroke="var(--color-current)"
              stackId="a"
            />
            <Area
              dataKey="predicted"
              type="natural"
              fill="url(#fillPredicted)"
              stroke="var(--color-predicted)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}




