import { pages } from '../data/pages'
import { funnels } from '../data/funnels'
import PagePreview from '../components/PagePreview'
import FunnelPreview from '../components/FunnelPreview'
import SectionPreview from '../components/SectionPreview'

export default function PagesPreview() {
  return (
    <div className="space-y-10">
      <SectionPreview
        title="Webové stránky"
        description="Vysvětlují projekt, orientují a budují důvěru."
        count={pages.length}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pages.map(page => (
            <PagePreview key={page.id} page={page} />
          ))}
        </div>
      </SectionPreview>

      <SectionPreview
        title="Trychtýře"
        description="Vedou ke konkrétní konverzní akci — registrace, nákup, poptávka."
        count={funnels.length}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {funnels.map(funnel => (
            <FunnelPreview key={funnel.id} funnel={funnel} />
          ))}
        </div>
      </SectionPreview>
    </div>
  )
}
