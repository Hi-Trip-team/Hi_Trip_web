import { http, HttpResponse } from "msw"
import { API_BASE_URL } from "@/shared/api/client"

export const handlers = [
  // Dashboard Stats
  http.get(`${API_BASE_URL}/dashboard/stats`, () => {
    return HttpResponse.json({
      success: true,
      data: {
        reservations: { total: 125, percentageChange: 12.5 },
        cancellationRate: { rate: 84, percentageChange: -8.4 },
        popularProducts: { count: 92, percentageChange: 15.2 },
        salesIncrease: { rate: 36, percentageChange: 7.8 },
      },
    })
  }),

  // Revenue Data
  http.get(`${API_BASE_URL}/dashboard/revenue`, () => {
    return HttpResponse.json({
      success: true,
      data: {
        total: 450000,
        change: "전월 대비 수입",
        data: [
          { month: "Jan", value: 380000, comparison: 350000 },
          { month: "Feb", value: 420000, comparison: 390000 },
          { month: "Mar", value: 350000, comparison: 380000 },
          { month: "Apr", value: 480000, comparison: 420000 },
          { month: "May", value: 510000, comparison: 460000 },
          { month: "Jun", value: 480000, comparison: 490000 },
          { month: "Jul", value: 520000, comparison: 510000 },
          { month: "Aug", value: 490000, comparison: 520000 },
        ],
      },
    })
  }),

  // Rankings
  http.get(`${API_BASE_URL}/dashboard/rankings`, () => {
    return HttpResponse.json({
      success: true,
      data: [
        { rank: 1, name: "김다은", description: "국내 2-3일(일반 단체 4)", percentage: 80 },
        { rank: 2, name: "박민호", description: "제주 3-4일(숙박권)", percentage: 75 },
        { rank: 3, name: "이수영", description: "해외 4-5일(단체 건설)", percentage: 70 },
        { rank: 4, name: "성은수", description: "해외 5-7일 2 관광", percentage: 65 },
        { rank: 5, name: "이도준", description: "단독 주 이상 뉴욕", percentage: 60 },
      ],
    })
  }),

  http.get(`${API_BASE_URL}/pre-travel/customers`, () => {
    return HttpResponse.json([
      {
        id: "1",
        name: "김영서",
        birthDate: "1994.05.21",
        gender: "남",
        phone: "010-4821-9374",
        email: "yeonseo.kim@hitrip.co.kr",
        hasPassport: true,
        hasIdVerification: true,
        hasReservation: true,
        englishName: "Yeonseo LEE",
        nationality: "대한민국",
        address: "서울특별시 강동구 천호대로 1024, 301호",
      },
      {
        id: "2",
        name: "이도현",
        birthDate: "1991.11.03",
        gender: "남",
        phone: "010-7753-1204",
        email: "dohyun.lee@company.com",
        hasPassport: false,
        hasIdVerification: false,
        hasReservation: false,
        englishName: "Dohyun LEE",
        nationality: "대한민국",
        address: "서울특별시 송파구 올림픽로 300",
      },
      {
        id: "3",
        name: "박서연",
        birthDate: "1996.02.14",
        gender: "여",
        phone: "010-3392-5581",
        email: "seoyeon.park@sample.co.kr",
        hasPassport: true,
        hasIdVerification: true,
        hasReservation: true,
        englishName: "Seoyeon PARK",
        nationality: "대한민국",
        address: "서울특별시 마포구 월드컵북로 400",
      },
      {
        id: "4",
        name: "최민지",
        birthDate: "1989.08.30",
        gender: "여",
        phone: "010-6149-7720",
        email: "minji.choi@company.com",
        hasPassport: true,
        hasIdVerification: true,
        hasReservation: false,
        englishName: "Minji CHOI",
        nationality: "대한민국",
        address: "서울특별시 강남구 테헤란로 500",
      },
      {
        id: "5",
        name: "정우진",
        birthDate: "1993.12.14",
        gender: "남",
        phone: "010-9021-6648",
        email: "woojin.jung@sample.com",
        hasPassport: true,
        hasIdVerification: true,
        hasReservation: false,
        englishName: "Woojin JUNG",
        nationality: "대한민국",
        address: "서울특별시 서초구 반포대로 600",
      },
    ])
  }),

  http.get(`${API_BASE_URL}/pre-travel/customers/:id`, ({ params }) => {
    const customers = [
      {
        id: "1",
        name: "김영서",
        birthDate: "1994.05.21",
        gender: "남",
        phone: "010-4821-9374",
        email: "yeonseo.kim@hitrip.co.kr",
        hasPassport: true,
        hasIdVerification: true,
        hasReservation: true,
        englishName: "Yeonseo LEE",
        nationality: "대한민국",
        address: "서울특별시 강동구 천호대로 1024, 301호",
      },
    ]

    const customer = customers.find((c) => c.id === params.id) || customers[0]
    return HttpResponse.json(customer)
  }),

  http.get(`${API_BASE_URL}/pre-travel/schedule/:tripId`, () => {
    return HttpResponse.json({
      title: "서울 여행",
      days: [
        {
          day: 1,
          items: [
            {
              id: "1",
              order: 1,
              timeRange: "09:00-10:00",
              location: "서울역 → 남산타워",
              transportation: "전용버스",
              description: "오리엔테이션 및 안전 이용 가이드 설명",
              manager: "서울역",
              budget: "$15",
            },
            {
              id: "2",
              order: 2,
              timeRange: "10:00-13:00",
              location: "남산타워 / 명동거리",
              transportation: "도보",
              description: "남산타워 전망대 관람 & 명동 자유 관광",
              manager: "행동유발",
              budget: "$10",
            },
            {
              id: "3",
              order: 3,
              timeRange: "13:00-15:00",
              location: "남대문시장",
              transportation: "도보",
              description: "전통시장 투어 & 점심식사",
              manager: "남대문시장 관리",
              budget: "$0",
            },
            {
              id: "4",
              order: 4,
              timeRange: "15:00-18:00",
              location: "인사동 거리 / 북촌",
              transportation: "전용버스",
              description: "한국 전통문화 체험 & 기념품 구입",
              manager: "인사동 공영주차장",
              budget: "$20",
            },
            {
              id: "5",
              order: 5,
              timeRange: "18:00-20:00",
              location: "숙소A (홍대)",
              transportation: "전용버스",
              description: "체크인 및 석식, 자유시간",
              manager: "숙소A",
              budget: "$25",
            },
          ],
        },
        {
          day: 2,
          items: [
            {
              id: "6",
              order: 1,
              timeRange: "09:00-12:00",
              location: "경복궁",
              transportation: "전용버스",
              description: "경복궁 관람 및 가이드 투어",
              manager: "경복궁",
              budget: "$15",
            },
          ],
        },
        {
          day: 3,
          items: [
            {
              id: "7",
              order: 1,
              timeRange: "09:00-12:00",
              location: "한강공원",
              transportation: "전용버스",
              description: "한강 자전거 투어 및 피크닉",
              manager: "한강공원",
              budget: "$20",
            },
          ],
        },
        {
          day: 4,
          items: [
            {
              id: "8",
              order: 1,
              timeRange: "09:00-12:00",
              location: "광장시장",
              transportation: "지하철",
              description: "전통시장 체험 및 먹거리 투어",
              manager: "광장시장",
              budget: "$15",
            },
          ],
        },
      ],
    })
  }),

  // During-travel mock API handlers
  http.get(`${API_BASE_URL}/during-travel/trips`, () => {
    return HttpResponse.json([
      {
        id: "1",
        order: "1",
        progress: "5/10",
        name: "2025 일본 도쿄 비즈니스 출장",
        manager: "이연세",
        startDate: "2025.03.12",
      },
      {
        id: "2",
        order: "2",
        progress: "8/15",
        name: "동남아 인센티브 투어 (베트남)",
        manager: "김민준",
        startDate: "2025.04.05",
      },
      {
        id: "3",
        order: "3",
        progress: "12/20",
        name: "유럽 한지숙차 출장 - 파리 베를린",
        manager: "박서연",
        startDate: "2025.05.18",
      },
      {
        id: "4",
        order: "4",
        progress: "6/8",
        name: "국내 워크숍 여행 (제주)",
        manager: "정우진",
        startDate: "2025.02.21",
      },
      {
        id: "5",
        order: "5",
        progress: "18/25",
        name: "미주 판타디 미팅 출장 (LA)",
        manager: "한지민",
        startDate: "2025.06.03",
      },
    ])
  }),

  http.get(`${API_BASE_URL}/during-travel/recommendations/:tripId`, () => {
    return HttpResponse.json({
      recommendations: [
        {
          id: "1",
          name: "경복궁",
          image: "/images/image.jpeg",
          rating: 5,
          reviews: 16,
          discount: 20,
        },
        {
          id: "2",
          name: "명동성당",
          image: "/myeongdong-cathedral.jpg",
          rating: 4,
          reviews: 24,
          discount: 15,
        },
        {
          id: "3",
          name: "남산타워(N서울타워)",
          image: "/n-seoul-tower.jpg",
          rating: 5,
          reviews: 12,
          discount: 10,
        },
        {
          id: "4",
          name: "광장시장",
          image: "/gwangjang-market.jpg",
          rating: 5,
          reviews: 32,
          discount: 10,
        },
        {
          id: "5",
          name: "인사동 쌈지길",
          image: "/insadong-ssamzigil.jpg",
          rating: 4,
          reviews: 18,
          discount: 10,
        },
        {
          id: "6",
          name: "창덕궁 후원",
          image: "/changdeokgung-palace.jpg",
          rating: 5,
          reviews: 28,
          discount: 15,
        },
        {
          id: "7",
          name: "북촌 한옥마을",
          image: "/bukchon-hanok-village.jpg",
          rating: 4,
          reviews: 22,
          discount: 5,
        },
        {
          id: "8",
          name: "동대문 디자인플라자(DDP)",
          image: "/dongdaemun-design-plaza.jpg",
          rating: 5,
          reviews: 36,
          discount: 10,
        },
      ],
      schedule: [
        {
          id: "1",
          order: 1,
          time: "09:00-10:00",
          location: "서울역 → 남산타워",
          transportation: "전용버스",
          description: "오리엔테이션 및 안전 이용",
          meetingPoint: "서울역",
          budget: "$15",
        },
        {
          id: "2",
          order: 2,
          time: "10:00-13:00",
          location: "남산타워 / 명동거리",
          transportation: "도보",
          description: "남산타워 전망대 관람 & 명동 자유 관광",
          meetingPoint: "명동유발",
          budget: "$10",
        },
        {
          id: "3",
          order: 3,
          time: "13:00-15:00",
          location: "남대문시장",
          transportation: "도보",
          description: "전통시장 투어 & 점심식사",
          meetingPoint: "남대문시장 입구",
          budget: "$0",
        },
        {
          id: "4",
          order: 4,
          time: "15:00-18:00",
          location: "인사동 거리 / 북촌",
          transportation: "전용버스",
          description: "한국 전통문화 체험 & 기념품 구입",
          meetingPoint: "인사동 공영주차장",
          budget: "$20",
        },
        {
          id: "5",
          order: 5,
          time: "18:00-20:00",
          location: "숙소A (홍대)",
          transportation: "전용버스",
          description: "체크인 및 석식, 자유시간",
          meetingPoint: "숙소A",
          budget: "$25",
        },
      ],
    })
  }),

  http.get(`${API_BASE_URL}/during-travel/locations/:locationId`, () => {
    return HttpResponse.json({
      id: "1",
      name: "서울특별시 중구 세종대로 40 (남대문로4가)",
      accommodation: "숙박편",
      address: "무료 (입장 관람 가능)",
      businessInfo: "경복궁 (도보 및 대중교통 필수)",
      operatingHours: "화 2~3시간",
      aiRecommendation: "전통적 (도보 및 대중교통 필수)",
      aiGeneratedInfo:
        "숙박은 의무가 아닙니다. 도심지 전망의 편안한 호텔을 선택하세요. 서울을 대표하는 랜드마크로, 인근에 다른 관광 명소가 많습니다.",
      activityDetails:
        "본양과 왕성 안년도 관한 상세를 볼립니다. 문양과 해설 단속도 진행 가능입니다. 소요 시간은 2시간 내외로 관람이 가능합니다.",
      meetingPointAddress: "서울특별시 중구 세종대로 40, 숙박편 및 광장",
      imageUrl: "/gyeongbokgung-palace.jpg",
    })
  }),

  http.get(`${API_BASE_URL}/during-travel/chat/:customerId`, () => {
    return HttpResponse.json({
      customerName: "이연세",
      messages: [
        {
          id: "1",
          sender: "이연세",
          content: "안녕하세요.\n[제주 3박 4일 패키지] 렌트카 옵션에\n소형 SUV 추가 시 추가 비용은 얼마 입니까.",
          timestamp: "6:30 pm",
          isOwn: false,
        },
        {
          id: "2",
          sender: "고객님",
          content: "안녕하세요, 이연세 고객님.\n소형 SUV 추가 시 총 45,000원이 추가되며, 제고는 충분합니다.",
          timestamp: "6:34 pm",
          isOwn: true,
        },
        {
          id: "3",
          sender: "이연세",
          content: "성산일출봉 근처 숙소로 변경 가능할까요?\n추가금액도 알려주세요.",
          timestamp: "6:38 pm",
          isOwn: false,
        },
      ],
    })
  }),

  http.post(`${API_BASE_URL}/during-travel/chat/:customerId`, async ({ request }) => {
    const body = (await request.json()) as { message: string }
    console.log("[v0] Received message:", body.message)
    return HttpResponse.json({ success: true })
  }),
]
