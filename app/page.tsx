import {Inter} from '@next/font/google'

const inter = Inter({
  subsets: ['latin']
})

export default function Home() {
  return (
    <div style={{...inter.style, color: 'red'}}>
        nguyen quang hoang 
    </div>
  )
}
