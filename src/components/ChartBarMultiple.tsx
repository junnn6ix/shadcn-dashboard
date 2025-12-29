"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { CardDescription } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 81, mobile: 206 },
  { month: "August", desktop: 181, mobile: 120 },
  { month: "September", desktop: 263, mobile: 206 },
  { month: "October", desktop: 337, mobile: 178 },
  { month: "November", desktop: 283, mobile: 206 },
  { month: "Decemeber", desktop: 468, mobile: 387 },
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function ChartBarMultiple({ title }: { title: string }) {
  return (
    <div className="p-2">
      <div className="mb-4">
        <h1 className="text-lg font-medium">{title}</h1>
        <CardDescription className="">2024 -2025</CardDescription>
      </div>

      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>

      <div className="flex-col items-start gap-4 text-sm mt-4">
        <div className="grid gap-2">
          <div className="flex gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </div>
      </div>
    </div>
  );
}
