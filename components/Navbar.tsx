import { storage } from "@/utils/storage"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import { BsMoonStars } from "react-icons/bs"
import { CiLight } from "react-icons/ci"
function Navbar() {
  const [open, setOpen] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)
  const [theme, setTheme] = useState<string>(storage.getStorage("theme") || "light")
  const arrayLink = [
    {
      name: "About",
      link: "#hello",
    },
    {
      name: "Project",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]
  const handleToggleMenu = () => {
    setOpen(!open)
  }
  const handleToggleMode = () => {
    if (theme === "light") {
      setTheme("dark")
      storage.setStorage("theme", "dark")
    } else {
      setTheme("light")
      storage.setStorage("theme", "light")
    }
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  // fix hydration error
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }

  return (
    <nav className='flex justify-between gap-4 h-[80px] px-2 sm:p-0 z-50 sm:justify-around items-center shadow dark:shadow-gray-400 fixed left-0 right-0 top-0 bg-white dark:bg-dark'>
      {/* Logo */}
      <Link href='/' className='basis-4/6 sm:basis-auto'>
        <Image src={theme === "light" ? "/logo.svg" : "/logo-dark.svg"} alt='logo' height={150} width={130} />
      </Link>

      <div className='ita-navbar-menu-mobile ita-btn-shadow rounded-full dark:hover:bg-slate-900' onClick={handleToggleMenu}>
        Menu
        <AiFillCaretDown />
      </div>

      <ul className={`${open ? "" : "hidden"} sm:flex ita-navbar-menu animate-from-right bg-white dark:bg-dark font-bold`}>
        {arrayLink.map((item, index) => (
          <li key={index}>
            <Link className='ita-navbar-link dark:hover:text-secondary select-none' href={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={`cursor-pointer ita-btn-shadow flex items-center rounded-full ${
          theme === "dark" ? "justify-end" : "justify-start"
        } p-1 w-[70px] `}
        onClick={handleToggleMode}>
        {theme === "dark" ? (
          <BsMoonStars className='animate-from-left ' fontSize={27} />
        ) : (
          <CiLight className='animate-from-right ' fontSize={30} />
        )}
      </div>
    </nav>
  )
}

export default Navbar
