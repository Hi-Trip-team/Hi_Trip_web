import { create } from "zustand"
import { Traveler, TravelStats } from "@/types/traveler";
import { MOCK_TRAVELERS } from "@/constants/travelers";

interface TravelStore {
    travelers: Traveler[]
    stats: TravelStats
    updateTravelerProgress: (id: string, progress: number) => void
    updateTravelerStatus: (id: string, status: Traveler["status"]) => void  
    calsulateStats: () => void
}

export const useTravelStore = create<TravelStore>((set, get) => ({
    travelers: MOCK_TRAVELERS,
    stats: {
        total: MOCK_TRAVELERS.length,
        active: MOCK_TRAVELERS.filter(t => t.status === "active").length,
        completed: MOCK_TRAVELERS.filter(t => t.status === "completed").length,
        scheduled: MOCK_TRAVELERS.filter(t => t.status === "scheduled").length,
    },

    updateTravelerProgress: (id, progress) => {
        set(state => ({
            travelers: state.travelers.map(t => t.id === id ? { ...t, progress } : t)
        }));
        get().calsulateStats();
    },

    updateTravelerStatus: (id, status) => {
        set(state => ({
            travelers: state.travelers.map(t => t.id === id ? { ...t, status } : t)
        }));
        get().calsulateStats();
    },

    calsulateStats: () => {
        const travelers = get().travelers;
        set({
            stats: {
                total: travelers.length,
                active: travelers.filter(t => t.status === "active").length,
                completed: travelers.filter(t => t.status === "completed").length,
                scheduled: travelers.filter(t => t.status === "scheduled").length,
            }
        });
    }
}));