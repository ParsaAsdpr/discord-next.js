import DmsSidebar from '../components/DmsSidebar/DmsSidebar'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title='Friends'>
      <div className='flex flex-row'>
        <DmsSidebar />
      </div>
    </Layout>
  )
}
