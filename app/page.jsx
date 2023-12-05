import Image from 'next/image'
import Intro from './components/Intro'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Intro />
    </main>
  )
}
