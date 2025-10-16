import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { MOCK_ACTIVITY_DATA, CHART_CONFIG } from "@/constants/activity"

export default function ActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>여행 활동 추이</CardTitle>
        <CardDescription>최근 12일간의 여행 활동 데이터</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={CHART_CONFIG} className="h-[300px] w-full">
          <AreaChart data={MOCK_ACTIVITY_DATA}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="active"
              stackId="1"
              stroke="var(--color-active)"
              fill="var(--color-active)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="completed"
              stackId="1"
              stroke="var(--color-completed)"
              fill="var(--color-completed)"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
