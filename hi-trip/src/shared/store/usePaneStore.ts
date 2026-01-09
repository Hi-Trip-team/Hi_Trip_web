import { create } from "zustand";
import React from "react";

interface PaneState {
  // 현재 패널에 표시될 위젯 리스트
  widgets: React.ReactNode[];
  // 위젯을 교체하는 함수
  setWidgets: (widgets: React.ReactNode[]) => void;
  // 패널을 비우는 함수
  clearWidgets: () => void;
}

export const usePaneStore = create<PaneState>((set) => ({
  widgets: [],
  setWidgets: (widgets) => set({ widgets }),
  clearWidgets: () => set({ widgets: [] }),
}));