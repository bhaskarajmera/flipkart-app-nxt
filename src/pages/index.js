import { Inter } from 'next/font/google'
import Header from './components/headerComponent/header'
import CategoryMain from './components/mainComponent/categoryMain'
import FeaturedCarouselMain from './components/mainComponent/featuredCarouselMain'
import FeaturedItemsMain from './components/mainComponent/featuredItemsMain'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
		<div>
			<Header />
			<CategoryMain />
			<FeaturedCarouselMain />
			<FeaturedItemsMain />
		</div>
    )
}