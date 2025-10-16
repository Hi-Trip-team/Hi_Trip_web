export interface Customer {
  id: string
  name: string
  birthDate: string
  gender: "남성" | "여성"
  phone: string
  email: string
  chat: {
    state: "O" | "X"
  }
  riskStatus: "안전" | "주의" | "위험"
  healthStatus: {
    heartRate: number
    oxygenSaturation: number
  }
}
