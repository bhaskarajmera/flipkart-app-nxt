import { Inter } from 'next/font/google'
import HomeMain from './components/mainComponent/homeMain'
import ProductsMain from './components/mainComponent/productsMain'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
		<div>
			<HomeMain />
		</div>
    )
}