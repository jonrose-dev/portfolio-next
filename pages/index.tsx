import type { NextPage } from 'next';
import Head from 'next/head';
import { Image, TerminalEmulator, Text } from '../components';
import { ArrowDown, FileText } from 'react-feather';
import { useEffect, useRef, useState } from 'react';

const className = {
  imageLink: 'hover:opacity-100 opacity-50 transition-all duration-500',
};

const MOUSE_X_OFFSET = 115;
const MOUSE_Y_OFFSET = 82;

const Home: NextPage = () => {
  const meSectionRef = useRef<HTMLDivElement>(null);
  const connectSectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(5);

  const onIntroArrowClick = () => {
    meSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onWorkArrowClick = () => {
    connectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {

    // Don't show on touchscreens and the location gets weird
    if (('ontouchstart' in window) || navigator.maxTouchPoints > 0) {
      return () => { }
    }

    document.addEventListener("scroll", () => {
      setCounter(5);
      setScrollOffset(document.scrollingElement?.scrollTop ?? 0);
    })

    document.addEventListener("mousemove", (e: MouseEvent) => {
      setCounter(5);
      setMousePosition({ x: e.clientX, y: e.clientY });
    })

    const interval = setInterval(() => {
      setCounter(time => time > 0 ? time - 1 : 0);
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // show when the counter is at 0 and there is a mouse position
  const shouldShow = !counter && !!mousePosition.y && !!mousePosition.x;

  const top = Math.max(0, scrollOffset + mousePosition.y - MOUSE_Y_OFFSET)
  const left = Math.max(0, mousePosition.x - MOUSE_X_OFFSET)

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:text-black focus:p-4">
        Skip to main content
      </a>
      <div
        style={{ top, left }}
        className={`absolute ${shouldShow ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0 invisible"}`}
        aria-hidden="true"
      >
        <Image
          src="https://media.giphy.com/media/JhUZYdpnqrgcM/giphy.gif"
          alt=""
          className="justify-self-center w-[331px] h-[229px]"
          height={229}
          width={331}
        />
      </div>
      <Head>
        <title>Jon Rose</title>
      </Head>
      <header className="flex flex-col items-center min-h-screen bg-[linear-gradient(135deg,#007ACC_0%,#00D4FF_100%)] justify-between">
        <Text as="h1" size="xl" className="text-white text-center py-4">
          Oh, Hello There!
        </Text>
        <TerminalEmulator />
        <nav className="h-20 relative flex justify-center" aria-label="Page navigation">
          <button
            onClick={onIntroArrowClick}
            className="cursor-pointer absolute text-white animate-[down_1.25s_infinite] bg-transparent border-0 p-2"
            aria-label="Scroll to about section"
          >
            <ArrowDown size="48" aria-hidden="true" />
          </button>
        </nav>
      </header>
      <main id="main-content">
        <section className="h-fit bg-black grid grid-rows-[auto,1fr] w-full pb-12" ref={meSectionRef} aria-labelledby="about-heading">
          <Image
            src="/images/me.webp"
            height={398}
            width={398}
            alt="cartoon version of me at a computer"
            className="justify-self-center text-center w-[398px] h-[398px]"
          />
          <Text as="h2" id="about-heading" size="lg" className="text-white w-[70vw] text-center justify-self-center">
            My name is Jon Rose and I am passionate about writing performant and elegant code. Whether
            it&apos;s for a static website, highly interactive web-app, or high performance micro-service, I love
            working on it all.
          </Text>
        </section>
        <section className="h-fit bg-[rgb(248,248,250)] text-[#001c3d] grid grid-rows-[auto,1fr] w-full pb-12 px-6 gap-y-8  py-8" aria-labelledby="work-heading">
          <Image
            src="https://getcenter.com/wp-content/uploads/2023/03/logo.png"
            height={500}
            width={500}
            alt="Logo for Center"
            className="justify-self-center text-center"
          />
          <Text as="h2" id="work-heading" size="xl" className="w-[70vw] text-center justify-self-center">
            Sr. Director of Engineering
          </Text>
          <Text as="p" size='lg' className='justify-self-center text-center w-[80vw]'>
            As the Senior Director of Engineering at Center, I lead a team of over 20 engineers, ensuring the development of scalable, maintainable, and resilient systems. I collaborate closely with the product and design teams to define and refine product features, translating business needs into technical solutions. My role involves guiding the engineering team in designing and implementing these features with a strong emphasis on long-term scalability, ease of maintenance, and system recoverability. Additionally, I work closely with the support team to triage issues, gain insight into customer needs, and help identify solutions to the challenges they face, ensuring Center&apos;s platform remains robust, adaptable, and customer-centric.
          </Text>

          <nav className="h-20 relative flex justify-center" aria-label="Page navigation">
            <button
              onClick={onWorkArrowClick}
              className="cursor-pointer absolute text-white animate-[down_1.25s_infinite] bg-transparent border-0 p-2"
              aria-label="Scroll to contact section"
            >
              <ArrowDown size="48" aria-hidden="true" />
            </button>
          </nav>
        </section>
        <section
          className="h-fit min-h-screen bg-[#156620] flex flex-col gap-8 items-center w-full pb-12  py-8"
          ref={connectSectionRef}
          aria-labelledby="contact-heading"
        >
          <Text as="h2" id="contact-heading" size="xl" className="text-white w-[70vw] text-center justify-self-center">
            Let&apos;s Chat!
          </Text>
          <a
            className="text-center items-center text-white flex flex-col gap-y-4"
            href="https://jonrose.dev/resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Download resume (PDF, opens in new tab)"
          >
            <Text className="text-white text-center gap-4 flex items-center" size="md">
              Check out my resume
              <FileText className="text-center" size="24" aria-hidden="true" />
            </Text>
          </a>
          <nav aria-label="Social media links">
            <ul className="flex gap-x-4 justify-center list-none p-0 m-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/jonathan-rose-dev/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit my LinkedIn profile (opens in new tab)"
                >
                  <Image
                    src="/images/linkedin.webp"
                    alt=""
                    className={className.imageLink}
                    height={100}
                    width={100}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jonrose-dev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit my GitHub profile (opens in new tab)"
                >
                  <Image
                    src="/images/github.webp"
                    alt=""
                    className={className.imageLink}
                    height={100}
                    width={100}
                  />
                </a>
              </li>
              <li>
                <a href="mailto:jon@jonrose.dev" aria-label="Send me an email">
                  <Image
                    src="/images/email.webp"
                    alt=""
                    className={className.imageLink}
                    height={100}
                    width={100}
                  />
                </a>
              </li>
            </ul>
          </nav>
          <Image
            src="/images/bye.webp"
            alt="Me Waving Goodbye"
            className="justify-self-center"
            height={200}
            width={200}
          />
        </section>
      </main>
    </>
  );
};

export default Home;
