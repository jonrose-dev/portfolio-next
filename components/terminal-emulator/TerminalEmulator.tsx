import { useCallback, useState } from 'react';
import { TerminalLine } from './terminal-line';
import { terminalLines } from './terminalEmulator.utils';

const className = {
  btns: ({ color }: { color: string }) => `${color} rounded-full w-[10px]`,
};

export const TerminalEmulator = () => {
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const incrementActiveLine = useCallback(() => {
    setCurrentLineIdx((currentLineIdx) => currentLineIdx + 1);
  }, []);
  return (
    <div className="animate-[appear_ease-out_0.8s] w-[90vw] max-w-4xl bg-black px-3 py-2 h-fit min-h-[500px] rounded-md shadow-emulator">
      <div className="flex gap-x-1 h-[10px]">
        <div className={className.btns({ color: 'bg-stop' })} />
        <div className={className.btns({ color: 'bg-slow' })} />
        <div className={className.btns({ color: 'bg-go' })} />
      </div>
      <div className="text-white pt-5">
        {terminalLines.map(({ input, path, results }, index) => {
          if (currentLineIdx < index) return null;

          const isActive = currentLineIdx === index;
          const handleIncrementActiveLine =
            index === terminalLines.length - 1 ? undefined : incrementActiveLine;
          return (
            <TerminalLine
              key={input + index}
              input={input}
              path={path}
              results={results}
              incrementActiveLine={handleIncrementActiveLine}
              isActive={isActive}
            />
          );
        })}
      </div>
    </div>
  );
};
