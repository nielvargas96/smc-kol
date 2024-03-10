
import SpecialFeatured from './components/@specialFeatured/specialfeatured'
import Landing from './components/@landing/page'
import OurMedia from './our-media/page'
import Magazine from './components/@magazine/page'


export default function Page() {
  return (
    <>
      <Landing />
      {/* Our media is seperated not working with parallel routes when running npm build */}
      <OurMedia />
      <SpecialFeatured />
      <Magazine />
    </>
  )
}

