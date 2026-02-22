import type { NextPage } from 'next';
import Head from 'next/head';
import { Image, TerminalEmulator, Text } from '../components';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const CatGif = dynamic(() => import('../components/cat-gif/CatGif'), {
  ssr: false,
});

const ArrowDownIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

const FileTextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const className = {
  imageLink: 'hover:opacity-100 opacity-50 transition-all duration-500',
};

const Home: NextPage = () => {
  const meSectionRef = useRef<HTMLDivElement>(null);
  const connectSectionRef = useRef<HTMLDivElement>(null);

  const onIntroArrowClick = () => {
    meSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onWorkArrowClick = () => {
    connectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:text-black focus:p-4">
        Skip to main content
      </a>
      <CatGif />
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
            <ArrowDownIcon />
          </button>
        </nav>
      </header>
      <main id="main-content">
        <section className="h-fit bg-black grid grid-rows-[auto,1fr] w-full pb-12" ref={meSectionRef} aria-labelledby="about-heading">
          <Image
            src="/images/me.webp"
            height={265}
            width={265}
            alt="cartoon version of me at a computer"
            className="justify-self-center text-center w-[265px] h-[265px]"
          />
          <Text as="h2" id="about-heading" size="lg" className="text-white w-[70vw] text-center justify-self-center">
            My name is Jon Rose and I am passionate about writing performant and elegant code. Whether
            it&apos;s for a static website, highly interactive web-app, or high performance micro-service, I love
            working on it all.
          </Text>
        </section>
        <section className="h-fit bg-[rgb(248,248,250)] text-[#001c3d] grid grid-rows-[auto,1fr] w-full pb-12 px-6 gap-y-8  py-8" aria-labelledby="work-heading">
          <Image
            src="/images/center-logo.webp"
            height={329}
            width={1092}
            alt="Logo for Center"
            className="justify-self-center text-center w-full max-w-[728px] h-auto"
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
              <ArrowDownIcon />
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
              <FileTextIcon />
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
