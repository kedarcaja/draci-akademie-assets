import Layout from './components/Layout'
import HomePreview from './pages/HomePreview'
import AssetsPreview from './pages/AssetsPreview'
import DocsPreview from './pages/DocsPreview'

export default function App() {
  return (
    <Layout>
      {(view) => {
        if (view === 'assets') return <AssetsPreview />
        if (view === 'docs')   return <DocsPreview />
        return <HomePreview />
      }}
    </Layout>
  )
}
