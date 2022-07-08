import type { NextPage } from 'next';
import Head from 'next/head';
import { Image, TerminalEmulator, Text } from '../components';
import { ArrowDown, FileText } from 'react-feather';
import { useRef } from 'react';

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
      <Head>
        <title>Jon Rose</title>
      </Head>
      <div className="flex flex-col items-center min-h-screen bg-[linear-gradient(135deg,#007ACC_0%,#00D4FF_100%)] justify-between">
        <Text as="h1" size="xl" className="text-white text-center py-4">
          Welcome
        </Text>
        <TerminalEmulator />
        <div className="h-20 relative flex justify-center">
          <ArrowDown
            className="cursor-pointer absolute text-white animate-[down_1.25s_infinite]"
            size="48"
            onClick={onIntroArrowClick}
          />
        </div>
      </div>
      <div className="h-fit bg-black grid grid-rows-[auto,1fr] w-full pb-12" ref={meSectionRef}>
        <Image
          src="/images/me.webp"
          height={378}
          width={378}
          alt="cartoon version of me at a computer"
          className="w-[50vw] max-w-screen-sm justify-self-center text-center"
        />
        <Text as="h2" size="lg" className="text-white w-[70vw] text-center justify-self-center">
          My name is Jon Rose and I am passionate about writing performant and elegant code. Whether
          it&apos;s for a static website, highly interactive web apps, or even an iOS app, I love
          working on it all.
        </Text>
      </div>
      <div className="h-fit bg-[#103169] grid grid-rows-[auto,1fr] w-full pb-12 px-6 gap-y-8  py-8 ">
        <Text as="h2" size="xl" className="text-white text-center justify-self-center">
          What I&apos;m Up To
        </Text>
        <Image
          className="bg-white w-fit"
          src="https://www.optimize.health/hubfs/optimize-health-logo.png"
          alt="Optimize Health Logo"
          width={500}
          height={115}
        />
        <Text as="h3" size="lg" className="text-white">
          Engineering Manager
        </Text>
        <Text className="text-white" size="md">
          Building the future of optimize.health&apos;s Remote Patient Monitoring services.
        </Text>
        <div className="h-20 relative flex justify-center">
          <ArrowDown
            onClick={onWorkArrowClick}
            className="cursor-pointer absolute text-white animate-[down_1.25s_infinite]"
            size="48"
          />
        </div>
      </div>
      <div
        className="h-fit min-h-screen bg-[#156620] flex flex-col items-center justify-between w-full pb-12  py-8"
        ref={connectSectionRef}
      >
        <Text as="h2" size="xl" className="text-white w-[70vw] text-center justify-self-center">
          Let&apos;s Chat!
        </Text>
        <Text className="text-white text-center" size="md">
          I&apos;m always looking for new and exciting challenges
        </Text>
        <div className="flex gap-x-4 justify-center">
          <a
            href="https://www.linkedin.com/in/jonathan-rose-dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="/images/linkedin.webp"
              alt="LinkedIn Logo"
              className={className.imageLink}
              height={100}
              width={100}
            />
          </a>
          <a
            href="https://github.com/jonrose-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Image
              src="/images/github.webp"
              alt="Github Logo"
              className={className.imageLink}
              height={100}
              width={100}
            />
          </a>
          <a href="mailto:jon@jonrose.dev" aria-label="Email Me">
            <Image
              src="/images/email.webp"
              alt="Email Icon"
              className={className.imageLink}
              height={100}
              width={100}
            />
          </a>
        </div>
        <a
          className="text-center items-center text-white flex flex-col gap-y-4"
          href="https://jonrose.dev/resume.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="Resume"
        >
          <Text className="text-white text-center" size="md">
            Check out my resume
          </Text>
          <FileText className="text-center" size="48" />
        </a>
        <Image
          src="/images/bye.webp"
          alt="Me Waving Goodbye"
          className="justify-self-center"
          height={200}
          width={200}
        />
      </div>
    </>
  );
};

export default Home;
