import { useEffect, useState } from 'react';
import { Image } from '../image';

const MOUSE_X_OFFSET = 77;
const MOUSE_Y_OFFSET = 55;

const CatGif = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(5);

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

  const shouldShow = !counter && !!mousePosition.y && !!mousePosition.x;
  const top = Math.max(0, scrollOffset + mousePosition.y - MOUSE_Y_OFFSET)
  const left = Math.max(0, mousePosition.x - MOUSE_X_OFFSET)

  return (
    <div
      style={{ top, left }}
      className={`absolute ${shouldShow ? "opacity-100 transition-opacity duration-[3s]" : "opacity-0 invisible"}`}
      aria-hidden="true"
    >
      <Image
        src="/images/cat.gif"
        alt=""
        className="justify-self-center w-[221px] h-[153px]"
        height={153}
        width={221}
      />
    </div>
  );
};

export default CatGif;
