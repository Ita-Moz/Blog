import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className="font-Heebo text-dark dark:text-white dark:bg-dark duration-300 max-w-screen-2xl min-h-screen font-base flex flex-col container mx-auto overflow-x-hidden">
      <Navbar/>
      <div className="flex-grow mt-[80px]">
      <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
    </>
  )
}
