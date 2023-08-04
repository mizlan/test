import Image from 'next/image'
import icebear from 'public/icebear.jpg'
import { Bungee_Spice } from 'next/font/google'

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
          My name is Michael and I am currently in a Zoom call.
          <br />
          <a href="https://google.com" className="underline underline-offset-4 text-opac">Here</a> is a link to Google.
        </p>
      </div>
      <p className="m-8 text-right opacity-60">&copy; 2023 Michael Lan</p>
    </main>
  )
}
