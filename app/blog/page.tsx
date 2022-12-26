import {Abel} from '@next/font/google'

const inter = Abel({
  subsets: ['latin'],
  weight: "400"
  
})


export default function HomePage() {
  return (
    <div className={inter.className}>page</div>
  )
}
