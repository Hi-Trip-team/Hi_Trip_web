import { Link } from "react-router-dom"
import { usePreTravelCustomers } from "../hooks/use-pre-travel-customers"
import { Skeleton } from "@/shared/components/ui"
import { ROUTES, TABLE_STATUS } from "@/shared/constants"
import { usePaneStore } from "@/shared/store"
import { ActionButton, UpcomingTrips } from "@/shared/components/widget"
import { useEffect } from "react"

const TABLE_HEADERS = [
  { key: "name", label: "이름", centered: false  },
  { key: "birthDate", label: "생년월일", centered: false },
  { key: "gender", label: "성별", centered: false },
  { key: "phone", label: "연락처", centered: false },
  { key: "email", label: "이메일", centered: false },
  { key: "passport", label: "여권정보", centered: true },
  { key: "idVerification", label: "신분확인", centered: true },
  { key: "reservation", label: "예약정보", centered: true },
] as const

export function PreTravelCustomersPage() {
  const { data: customers, isLoading } = usePreTravelCustomers()
  const setWidgets = usePaneStore((state) => state.setWidgets);
      
  useEffect(() => {
    setWidgets([
      <ActionButton title="고객 추가하기" />,
      <UpcomingTrips />
    ]);
    }, [setWidgets]);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-96 w-full" />
      </div>
    )
  }

  const renderStatusBadge = (hasStatus: boolean) => {
    const status = hasStatus ? TABLE_STATUS.COMPLETED : TABLE_STATUS.PENDING
    return (
      <span
        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-caption-1 font-medium bg-${status.color}-100 text-${status.color}-800`}
      >
        {status.label}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-title-1 text-grey-8">신청자 현황</h1>
          <p className="text-body-2 text-grey-5 mt-1">신청 인원: {customers?.length || 0}명</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-grey-2 border-b border-grey-3">
              <tr>
                {TABLE_HEADERS.map((header) => (
                  <th
                    key={header.key}
                    className={`px-6 py-3 text-subtitle-3 text-grey-6 uppercase tracking-wider ${
                      header.centered ? "text-center" : "text-left"
                    }`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-grey-3">
              {customers?.map((customer: any) => (
                <tr key={customer.id} className="hover:bg-grey-2">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={ROUTES.PRE_TRAVEL.CUSTOMER_DETAIL(customer.id)}
                      className="text-body-1 font-medium text-main-default hover:text-main-emphasis"
                    >
                      {customer.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-1 text-grey-8">{customer.birthDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-1 text-grey-8">{customer.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-1 text-grey-8">{customer.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-body-1 text-grey-8">{customer.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{renderStatusBadge(customer.hasPassport)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {renderStatusBadge(customer.hasIdVerification)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {renderStatusBadge(customer.hasReservation)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
