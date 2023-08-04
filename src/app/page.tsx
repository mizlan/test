import Image from 'next/image'
import icebear from 'public/icebear.jpg'
import { Bungee_Spice } from 'next/font/google'
import Balancer from 'react-wrap-balancer'
import { YoutubeLogo } from './icons'

const bungeeSpice = Bungee_Spice({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className="text-gray-600 dark:text-white min-h-screen flex flex-col justify-between">
      <div>
        <h1 className={`
        ${bungeeSpice.className}
        font-bold
        text-4xl
        px-4 py-2
        bg-mutedPurple-400 text-sky-700 dark:text-green-200 dark:bg-sky-700
        hover:text-6xl
        hover:dark:text-lg`}>
          bing chilling
        </h1>
        <Image src={icebear} alt="ice bear from 3 bare bears" />
        <p className="px-4 py-2">
          <Balancer>
            My name is Michael and I am currently in a Zoom call.
            <br />
            <a href="https://google.com" className="underline underline-offset-4">Here</a> is a link to Google.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin arcu vitae turpis fermentum ultricies. Integer id facilisis nibh, ut mattis nisl. In sit amet interdum lacus. Cras congue tincidunt neque, vel posuere felis accumsan sit amet. Vivamus venenatis et orci eget pharetra. Curabitur eget nulla mattis erat dignissim pulvinar id at ligula. Ut dignissim auctor ipsum quis dictum. Sed rutrum et sem bibendum malesuada.
          </Balancer>
        </p>
        <a href="https://youtube.com" className="m-8 inline-block  text-[#FF0000] hover:text-orange-400 transition-colors duration-500 ease-in">
          <YoutubeLogo weight="fill" size="32" />
        </a>
      </div>
      <p className="m-8 text-right opacity-60">&copy; 2023 Michael Lan</p>
    </main>
  )
}
