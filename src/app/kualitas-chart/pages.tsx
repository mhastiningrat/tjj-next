"use client"

// import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", thurbidity: Math.random() *100, pH: Math.random() *100, free_cholr: Math.random()*100,std:Math.random()*100,std2:Math.random()*100 },
  { month: "February", thurbidity: 305, pH: 200, free_cholr: Math.random()*100,std:Math.random()*100,std2:Math.random()*100 },
  { month: "March", thurbidity: 237, pH: 120, free_cholr: Math.random()*100,std:Math.random()*100,std2:Math.random()*100 },
  { month: "April", thurbidity: 73, pH: 190, free_cholr: Math.random()*100,std:Math.random()*100,std2:Math.random()*100 },
  { month: "May", thurbidity: 209, pH: 130, free_cholr: Math.random()*100,std:Math.random()*100,std2:Math.random()*100 },
  { month: "June", thurbidity: 214, pH: 140, free_cholr: Math.random()*100,std:Math.random()*100,std2:Math.random()*100 },
]

const chartConfig = {
  thurbidity: {
    label: "Thurbidity",
    color: "hsl(var(--chart-1))",
  },
  pH: {
    label: "pH",
    color: "hsl(var(--chart-2))",
  },
  free_cholr: {
    label: "Free Chlor",
    color: "hsl(var(--chart-3))",
  },
  std: {
    label: "STD",
    color: "hsl(var(--chart-4))",
  },
  std2: {
    label: "STD2",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function KualitasChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kualitas</CardTitle>
        <CardDescription></CardDescription>
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
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="thurbidity"
              type="monotone"
              stroke="#218bdb"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="pH"
              type="monotone"
              stroke="#e37434"
              strokeWidth={2}
              dot={false}
            />
             <Line
              dataKey="free_cholr"
              type="monotone"
              stroke="#9c8b81"
              strokeWidth={2}
              dot={false}
            />
             <Line
              dataKey="std"
              type="monotone"
              stroke="#e00425"
              strokeWidth={2}
              dot={false}
            />
             <Line
              dataKey="std2"
              type="monotone"
              stroke="#a1031b"
              strokeWidth={2}
              dot={false}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
          
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
            
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
             
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
