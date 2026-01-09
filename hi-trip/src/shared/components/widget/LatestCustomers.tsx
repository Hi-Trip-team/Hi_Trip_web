import { cn } from "@/shared/utils/cn";

// 임시 데이터 (나중에 API 연동 시 interface로 분리)
const CUSTOMERS = [
  { id: 1, name: "Neil Sims", email: "email@example.com", amount: "$367" },
  { id: 2, name: "Bonnie Green", email: "email@example.com", amount: "$67" },
  { id: 3, name: "Micheal Gough", email: "email@example.com", amount: "$3467" },
  { id: 4, name: "Thomas Lean", email: "email@example.com", amount: "$2367" },
  { id: 5, name: "Lana Byrd", email: "email@example.com", amount: "$367" },
  { id: 6, name: "Karen Nelson", email: "email@example.com", amount: "$1367" },
];

export function LatestCustomers() {
  return (
    <div className="bg-bg-white p-5 rounded-[20px] border border-grey-3 shadow-sm">
      <h4 className="text-subtitle-2 text-grey-8 mb-4">Latest Customers</h4>
      
      <div className="space-y-4">
        {CUSTOMERS.map((customer) => (
          <div key={customer.id} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              {/* 아바타 (Grey/4 사용) */}
              <div className="w-8 h-8 rounded-full bg-grey-4 overflow-hidden shrink-0">
                {/* <img src="..." alt={customer.name} /> */}
              </div>
              
              <div className="flex flex-col">
                <span className="text-body-2 font-bold text-grey-8 group-hover:text-primary transition-colors">
                  {customer.name}
                </span>
                <span className="text-caption-2 text-grey-5 truncate max-w-[120px]">
                  {customer.email}
                </span>
              </div>
            </div>

            {/* 금액 ( Gotham Black 폰트가 있다면 적용 ) */}
            <span className="text-body-2 font-bold text-grey-8">
              {customer.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}