import type { CampusBuilding } from '../data/campusBuildings'
import { buildingTypeColors, buildingTypeLabels } from '../data/campusBuildings'

interface CampusBuildingCardProps {
  building: CampusBuilding
}

export default function CampusBuildingCard({ building }: CampusBuildingCardProps) {
  return (
    <div className="asset-card flex flex-col p-4 gap-3 group hover:border-brand-gold/30 transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xl shrink-0">{building.icon}</span>
          <div>
            <h3 className="font-cinzel text-brand-parchment font-semibold text-sm leading-tight">
              {building.title}
            </h3>
            <p className="text-brand-gold text-[11px] mt-0.5">{building.subtitle}</p>
          </div>
        </div>
        <span className={`tag shrink-0 text-[10px] ${buildingTypeColors[building.type]}`}>
          {buildingTypeLabels[building.type]}
        </span>
      </div>

      {/* Description */}
      <p className="text-brand-text-muted text-xs leading-relaxed flex-1">
        {building.description}
      </p>

      {/* Microcopy */}
      <p className="text-brand-text-dim text-[11px] italic border-l-2 border-brand-gold/30 pl-2 leading-snug">
        {building.microcopy}
      </p>

      {/* Footer */}
      <div className="pt-2 border-t border-brand-border space-y-1.5">
        <div className="flex gap-2">
          <span className="text-brand-text-dim text-[10px] tracking-widest uppercase w-14 shrink-0">Stránka</span>
          <span className="text-brand-text-muted text-[11px] font-mono">{building.linkedPage}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-brand-text-dim text-[10px] tracking-widest uppercase w-14 shrink-0">Obrázek</span>
          <span className="text-brand-text-dim text-[11px] font-mono truncate">
            {building.imagePath.replace('/images/kampus/', '')}
          </span>
        </div>
      </div>
    </div>
  )
}
