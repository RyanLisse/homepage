import { Copyright } from 'phosphor-react'
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="max-w-screen-lg px-6 mx-auto my-24">
      <div className="flex items-center mb-4 space-x-1.5 sm:justify-center -ml-2 sm:ml-0">
        <a
          className="p-2"
          href="https://instagram.com/ryanlissemindset"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="1.5em" aria-label="Twitter" />
          <span className="sr-only">Instagram profile</span>
        </a>
        <a
          className="p-2"
          href="https://github.com/RyanLisse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="1.5em" aria-label="GitHub" />
          <span className="sr-only">Github profile</span>
        </a>
        <a
          className="p-2"
          href="https://www.youtube.com/user/ryanlisse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size="1.5em" aria-label="Youtube" />
          <span className="sr-only">Youtube profile</span>
        </a>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        <p className="inline-flex items-center space-x-1">
          <span>Made by Ryan Lisse in {new Date().getFullYear()}</span>
        </p>
        <p>in Amsterdam</p>
      </div>
    </footer>
  );
}

export default Footer
