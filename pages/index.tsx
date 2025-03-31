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
          Oh, Hello There!
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
          height={398}
          width={398}
          alt="cartoon version of me at a computer"
          className="justify-self-center text-center"
        />
        <Text as="h2" size="lg" className="text-white w-[70vw] text-center justify-self-center">
          My name is Jon Rose and I am passionate about writing performant and elegant code. Whether
          it&apos;s for a static website, highly interactive web-app, or high performance micro-service, I love
          working on it all.
        </Text>
      </div>
      <div className="h-fit bg-[rgb(248,248,250)] text-[#001c3d] grid grid-rows-[auto,1fr] w-full pb-12 px-6 gap-y-8  py-8 ">
        <Image
          src="https://getcenter.com/wp-content/uploads/2023/03/logo.png"
          height={500}
          width={500}
          alt="Logo for Center"
          className="justify-self-center text-center"
        />
        <Text as="h2" size="xl" className="w-[70vw] text-center justify-self-center">
          Sr. Director of Engineering
        </Text>
        <Text as="h3" size='lg' className='justify-self-center text-center w-[80vw]'>
          As the Senior Director of Engineering at Center, I lead a team of over 20 engineers, ensuring the development of scalable, maintainable, and resilient systems. I collaborate closely with the product and design teams to define and refine product features, translating business needs into technical solutions. My role involves guiding the engineering team in designing and implementing these features with a strong emphasis on long-term scalability, ease of maintenance, and system recoverability. Additionally, I work closely with the support team to triage issues, gain insight into customer needs, and help identify solutions to the challenges they face, ensuring Center’s platform remains robust, adaptable, and customer-centric.
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
        className="h-fit min-h-screen bg-[#156620] flex flex-col gap-8 items-center w-full pb-12  py-8"
        ref={connectSectionRef}
      >
        <Text as="h2" size="xl" className="text-white w-[70vw] text-center justify-self-center">
          Let&apos;s Chat!
        </Text>
        <a
          className="text-center items-center text-white flex flex-col gap-y-4"
          href="https://jonrose.dev/resume.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="Resume"
        >
          <Text className="text-white text-center gap-4 flex items-center" size="md">
            Check out my resume
            <FileText className="text-center" size="24" />
          </Text>
        </a>
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
