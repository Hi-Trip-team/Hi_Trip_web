import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, MapPin } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { STATUS_CONFIG } from "@/constants/stats"
import { useTravelStore } from "@/store/useTravelStore"

export default function TravelersTable() {
  const travelers = useTravelStore((state) => state.travelers)

  return (
    <Card>
      <CardHeader>
        <CardTitle>여행자 목록</CardTitle>
        <CardDescription>전체 여행자 및 여행 상태 관리</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>여행 ID</TableHead>
              <TableHead>여행자</TableHead>
              <TableHead>목적지</TableHead>
              <TableHead>여행 기간</TableHead>
              <TableHead>진행률</TableHead>
              <TableHead>상태</TableHead>
              <TableHead className="text-right">작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {travelers.map((traveler) => (
              <TableRow key={traveler.id}>
                <TableCell className="font-mono text-sm">{traveler.id}</TableCell>
                <TableCell className="font-medium">{traveler.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    {traveler.destination}
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {traveler.startDate} ~ {traveler.endDate}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${traveler.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{traveler.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={STATUS_CONFIG[traveler.status].variant}>{STATUS_CONFIG[traveler.status].label}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>작업</DropdownMenuLabel>
                      <DropdownMenuItem>상세 보기</DropdownMenuItem>
                      <DropdownMenuItem>일정 수정</DropdownMenuItem>
                      <DropdownMenuItem>메시지 보내기</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
