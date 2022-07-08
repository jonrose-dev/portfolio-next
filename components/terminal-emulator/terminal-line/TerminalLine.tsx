import { useCallback, useEffect, useRef, useState } from 'react';
import { terminalLines } from '../terminalEmulator.utils';
import { Text } from '../../';

type TerminalLineProps = {
  incrementActiveLine?: () => void;
  isActive: boolean;
} & typeof terminalLines[number];

const className = {
  arrow: 'w-0 h-0 border-t-[10px] border-solid border-transparent border-b-[10px] border-l-[12px]',
};

export const TerminalLine = ({
  path,
  input,
  results,
  isActive,
  incrementActiveLine,
}: TerminalLineProps) => {
  const [inputToRender, setInputToRender] = useState('');
  const [showResults, setShowResults] = useState(false);
  const typingStarted = useRef(false);

  const typeLine = useCallback(() => {
    const randomVariability = Math.random() * 200 + 150;
    const interval = setInterval(() => {
      setInputToRender((current: string) => {
        if (current !== input) {
          return input.slice(0, current.length + 1);
        }
        clearInterval(interval);
        return current;
      });
    }, randomVariability);
  }, [input]);

  useEffect(() => {
    if (typingStarted.current) {
      return;
    }
    typingStarted.current = true;
    // Delay start
    setTimeout(() => {
      typeLine();
    }, 1500);
  }, [typeLine]);

  useEffect(() => {
    if (inputToRender === input) {
      incrementActiveLine?.();
      setShowResults(true);
    }
  }, [inputToRender, input, incrementActiveLine]);

  return (
    <div>
      <div className="flex">
        <span className="flex w-fit bg-blue">
          <div className={`border-l-black ${className.arrow}`} />
          <Text>&nbsp;{path}</Text>
          <div className={`bg-black ${className.arrow} border-l-blue`} />
        </span>
        <Text className="text-green">
          &nbsp;{inputToRender}
          {isActive && (
            <Text as="span" className="animate-[blink_1s_infinite]">
              |
            </Text>
          )}
        </Text>
      </div>
      {showResults && (
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {results.map((result) => (
            <Text key={result}>{result}</Text>
          ))}
        </div>
      )}
    </div>
  );
};
