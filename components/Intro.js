import Image from 'next/image'
import { ArrowDown, ChatCenteredText } from 'phosphor-react'

const Intro = () => {
  const handleClick = e => {
    e.preventDefault()
    plausible('Lead')
    window.location.href = 'mailto:ryan@ryanlisse.com'
  }
  return (
    <section id="author">
      <div className="flex flex-col items-center justify-between space-y-6 text-center sm:space-y-8 md:space-y-10">
        <div className="flex overflow-hidden rounded-full">
          <Image
            src="/images/portrait.png"
            width="96"
            height="96"
            layout="fixed"
            alt="Portrait photo of Ryan"
            priority
          />
        </div>
        <h1 className="text-3xl font-black tracking-tight sm:text-5xl md:text-6xl">
          Hi. I'm Ryan.
          <br /> Music marketing coach.
        </h1>
        <p className="max-w-xl sm:text-lg lg:max-w-2xl md:text-xl lg:text-2xl">
          Leaks from my brain, thoughts.
        </p>
        <div>
          <a
            onClick={handleClick}
            href="https://calendly.com/manageyoursocials/meetryan
"
            className="inline-flex items-center px-6 py-4 space-x-3 text-xl font-semibold text-white bg-indigo-700 dark:text-white hover:bg-indigo-600 hover:text-white ring-indigo-700 dark:ring-indigo-300 ring-offset-2 hover:no-underline"
          >
            <span>Get in touch</span>
            <ChatCenteredText focusable="false" weight="bold" size="24" />
          </a>
        </div>
        <p className="flex flex-col items-center tracking-tight text-center text-gray-500 dark:text-gray-400">
          <span className="mb-4 text-lg">Learn more &amp; book a call</span>
          <ArrowDown size="24" />
        </p>
        <p className="sr-only">Scroll down</p>
      </div>
    </section>
  );
}

export default Intro
