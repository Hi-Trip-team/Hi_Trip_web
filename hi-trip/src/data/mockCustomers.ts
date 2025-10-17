import type { Customer } from "../types/customer"

export const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "김민수",
    birthDate: "1990-05-15",
    gender: "남성",
    phone: "010-1234-5678",
    email: "minsu.kim@example.com",
    chat: {
      state: "O",
    },
    riskStatus: "안전",
    healthStatus: {
      heartRate: 72,
      oxygenSaturation: 98,
    },
  },
  {
    id: "2",
    name: "이지은",
    birthDate: "1995-08-22",
    gender: "여성",
    phone: "010-2345-6789",
    email: "jieun.lee@example.com",
    chat: {
      state: "O",
    },
    riskStatus: "안전",
    healthStatus: {
      heartRate: 68,
      oxygenSaturation: 99,
    },
  },
  {
    id: "3",
    name: "박준호",
    birthDate: "1988-03-10",
    gender: "남성",
    phone: "010-3456-7890",
    email: "junho.park@example.com",
    chat: {
      state: "X",
    },
    riskStatus: "주의",
    healthStatus: {
      heartRate: 88,
      oxygenSaturation: 95,
    },
  },
  {
    id: "4",
    name: "최서연",
    birthDate: "1992-11-30",
    gender: "여성",
    phone: "010-4567-8901",
    email: "seoyeon.choi@example.com",
    chat: {
      state: "O",
    },
    riskStatus: "안전",
    healthStatus: {
      heartRate: 70,
      oxygenSaturation: 98,
    },
  },
  {
    id: "5",
    name: "정우진",
    birthDate: "1985-07-18",
    gender: "남성",
    phone: "010-5678-9012",
    email: "woojin.jung@example.com",
    chat: {
      state: "X",
    },
    riskStatus: "위험",
    healthStatus: {
      heartRate: 105,
      oxygenSaturation: 92,
    },
  },
  {
    id: "6",
    name: "강혜진",
    birthDate: "1998-02-25",
    gender: "여성",
    phone: "010-6789-0123",
    email: "hyejin.kang@example.com",
    chat: {
      state: "O",
    },
    riskStatus: "안전",
    healthStatus: {
      heartRate: 65,
      oxygenSaturation: 99,
    },
  },
  {
    id: "7",
    name: "윤성민",
    birthDate: "1993-09-12",
    gender: "남성",
    phone: "010-7890-1234",
    email: "seongmin.yoon@example.com",
    chat: {
      state: "O",
    },
    riskStatus: "안전",
    healthStatus: {
      heartRate: 74,
      oxygenSaturation: 97,
    },
  },
  {
    id: "8",
    name: "한소희",
    birthDate: "1996-04-08",
    gender: "여성",
    phone: "010-8901-2345",
    email: "sohee.han@example.com",
    chat: {
      state: "X",
    },
    riskStatus: "주의",
    healthStatus: {
      heartRate: 85,
      oxygenSaturation: 96,
    },
  },
]
