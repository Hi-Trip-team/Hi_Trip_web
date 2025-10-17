import { type ClassValue, clsx } from "clsx" // 조건부로 클래스 이름을 결합해준다.
import { twMerge } from "tailwind-merge" // Tailwind CSS 클래스 이름을 병합하고 충돌을 해결해준다.

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}