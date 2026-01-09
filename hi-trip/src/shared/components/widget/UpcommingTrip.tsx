const UPCOMING_DATA = [
  {
    id: 1,
    title: "제주 3박 4일 여행",
    time: "오늘 오전 7:00 출발",
    location: "제주공항 → 아일랜드로드",
    manager: "이연세",
    participants: 15,
  },
  {
    id: 2,
    title: "안동 문화체험 투어",
    time: "2025년 10월 16일 오후 1:00",
    location: "안동 하회마을 / 도산서원",
    manager: "김원주",
    participants: 20,
  }
];

export function UpcomingTrips() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-subtitle-2 text-grey-8 font-bold">다가오는 여행 일정</h3>
      
      <div className="space-y-4">
        {UPCOMING_DATA.map((trip) => (
          <div key={trip.id} className="p-4 rounded-2xl border border-grey-3 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group">
            <div className="flex gap-3 mb-3">
              {/* 임시 썸네일 */}
              <div className="w-12 h-12 rounded-full bg-blue-100 shrink-0 overflow-hidden" />
              <div className="flex flex-col">
                <span className="text-body-2 font-bold text-grey-8 group-hover:text-primary transition-colors">{trip.title}</span>
                <span className="text-caption-2 text-grey-5">{trip.time}</span>
              </div>
            </div>
            
            <div className="space-y-1 ml-15">
              <p className="text-caption-2 text-grey-6">{trip.location}</p>
              <p className="text-caption-2 text-grey-4">담당자: {trip.manager}</p>
            </div>

            {/* 참여자 아바타 스택 (간략 구현) */}
            <div className="flex items-center mt-3 ml-15">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-grey-3 -ml-2 first:ml-0" />
              ))}
              <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center -ml-2">
                <span className="text-[10px] text-blue-700 font-bold">{trip.participants}+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 mt-2 bg-bg-soft text-grey-6 rounded-xl text-body-2 font-semibold hover:bg-grey-3 transition-colors">
        더보기
      </button>
    </div>
  );
}