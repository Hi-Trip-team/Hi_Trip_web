// src/components/widgets/CalendarWidget.tsx
export function CalendarWidget() {
  return (
    <div className="bg-bg-white p-5 rounded-[20px] border border-grey-3 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-subtitle-2 text-grey-8">날짜</h4>
        <button className="text-grey-4 hover:text-grey-6">▼</button>
      </div>
      {/* 실제 달력 UI 로직이 들어갈 자리 */}
      <div className="aspect-square bg-bg-canvas rounded-lg flex items-center justify-center text-caption-2 text-grey-4">
        Calendar Placeholder
      </div>
    </div>
  );
}