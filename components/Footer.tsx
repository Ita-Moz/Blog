import Link from "next/link"
import { BsFacebook, BsGithub } from "react-icons/bs"
import { GrMail } from "react-icons/gr"

function Footer() {
  return (
    <footer className='container mx-auto py-10 dark:bg-dark max-w-screen-2xl dark:text-white'>
        <ul className="flex items-center justify-center gap-10">
          <li className="hover:-translate-y-1 duration-300 hover:scale-125">
            <a href='https://www.facebook.com/ItaD13' target='_blank' rel='noopener noreferrer'>
              <BsFacebook fontSize={25} />
            </a>
          </li>
          <li className="hover:-translate-y-1 duration-300 hover:scale-125">
            <a href='https://github.com/Ita-Moz' target='_blank' rel='noopener noreferrer'>
              <BsGithub fontSize={25}/>
            </a>
          </li>
          <li className="hover:-translate-y-1 duration-300 hover:scale-125">
            <Link href='/contact'>
              <GrMail fontSize={26}/>
            </Link>
          </li>
        </ul>
        <div className="text-center mt-5">
          <p>Copyright ©2023 All rights reserved </p>
        </div>
      </footer>
  )
}

export default Footer