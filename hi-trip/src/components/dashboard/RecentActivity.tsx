import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, CheckCircle2, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "started",
    traveler: "김민수",
    destination: "제주도",
    time: "10분 전",
    icon: MapPin,
  },
  {
    id: 2,
    type: "completed",
    traveler: "최서연",
    destination: "강릉",
    time: "1시간 전",
    icon: CheckCircle2,
  },
  {
    id: 3,
    type: "scheduled",
    traveler: "정우진",
    destination: "인천",
    time: "2시간 전",
    icon: Clock,
  },
  {
    id: 4,
    type: "started",
    traveler: "이지은",
    destination: "부산",
    time: "3시간 전",
    icon: MapPin,
  },
]

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 활동</CardTitle>
        <CardDescription>실시간 여행자 활동 피드</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div className="rounded-full bg-secondary p-2">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{activity.traveler}</p>
                  <p className="text-sm text-muted-foreground">{activity.destination}</p>
                </div>
                <div className="text-xs text-muted-foreground">{activity.time}</div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
