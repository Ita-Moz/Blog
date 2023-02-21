import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs"

function Footer() {
  return (
    <footer className='container mx-auto py-10 dark:bg-dark max-w-screen-2xl dark:text-white'>
        <ul className="flex items-center justify-center gap-10">
          <li>
            <a href='http://facebook.com' target='_blank' rel='noopener noreferrer'>
              <BsFacebook fontSize={25} />
            </a>
          </li>
          <li>
            <a href='https://github.com/Ita-Moz' target='_blank' rel='noopener noreferrer'>
              <BsGithub fontSize={25}/>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <BsInstagram fontSize={25}/>
            </a>
          </li>
        </ul>
        <div className="text-center mt-5">
          <p>Copyright ©2023 All rights reserved </p>
        </div>
      </footer>
  )
}

export default Footer