import Image from 'next/image'
import icebear from 'public/icebear.jpg'

export default function Home() {
  return (
    <main className="min-h-screen bg-indigo-100 text-gray-600">
      <h1 className="font-bold text-4xl px-4 py-2 bg-red-200 text-sky-700">
        Michael Lan
      </h1>
      <Image src={icebear} alt="ice bear from 3 bare bears" />
      <p className="px-4 py-2">
        My name is Michael and I am currently in a Zoom call.
        <br />
        <a href="https://google.com" className="underline underline-offset-4 text-opac">Here</a> is a link to Google.
      </p>
    </main>
  )
}
