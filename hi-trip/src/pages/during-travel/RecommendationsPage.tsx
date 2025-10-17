import { useState, useMemo } from "react"
import { Search, Tag } from "lucide-react"
import { mockRecommendations } from "../../data/mockRecommendations"
import { REGIONS } from "../../constants/regions"
import type { RecommendationLevel } from "../../types/recommendation"

export default function DuringTravelRecommendationsPage() {
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredRecommendations = useMemo(() => {
    return mockRecommendations.filter((place) => {
      const matchesRegion = selectedRegion === "all" || `${place.city}-${place.district}` === selectedRegion

      const matchesSearch =
        searchQuery === "" ||
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.specialNote.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesRegion && matchesSearch
    })
  }, [selectedRegion, searchQuery])

  const getRecommendationBadgeColor = (level: RecommendationLevel) => {
    switch (level) {
      case "매우 추천":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "추천":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20"
      case "보통":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">사용자 장소 추천</h1>
        <p className="text-muted-foreground mt-2">고객의 위치와 선호도를 기반으로 맞춤형 장소를 추천합니다.</p>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="장소명 또는 특이사항으로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="border-b border-border">
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.value)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                selectedRegion === region.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:bg-accent"
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-muted-foreground">총 {filteredRecommendations.length}개의 추천 장소</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRecommendations.map((place) => (
          <div
            key={place.id}
            className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              <img src={place.imageUrl || "/placeholder.svg"} alt={place.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-lg">{place.name}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium border whitespace-nowrap ${getRecommendationBadgeColor(
                    place.recommendationLevel,
                  )}`}
                >
                  {place.recommendationLevel}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="font-medium">위치:</span>
                  <span>
                    {place.city} {place.district}
                  </span>
                </div>

                <div className="text-muted-foreground">
                  <span className="font-medium">특이사항:</span>
                  <p className="mt-1 text-foreground/80">{place.specialNote}</p>
                </div>

                {place.advantage ? (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Tag className="h-4 w-4" />
                    <span className="font-medium">{place.advantage}</span>
                  </div>
                ):
                  <div className="py-2" />}
              </div>

              <div className="pt-2 border-t border-border">
                <span className="inline-block px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                  {place.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRecommendations.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>검색 결과가 없습니다.</p>
          <p className="text-sm mt-2">다른 지역이나 검색어를 시도해보세요.</p>
        </div>
      )}
    </div>
  )
}
