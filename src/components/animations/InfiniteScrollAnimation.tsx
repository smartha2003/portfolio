// InfiniteScrollAnimation.tsx
import React from 'react';

// Define type for props
type InfiniteLoopSliderProps = {
  children: React.ReactNode;
  duration: number;
  reverse?: boolean;
};

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({
  children,
  duration,
  reverse = false,
}) => {
  return (
    <div
      className="loop-slider relative overflow-hidden w-full"
      style={{
        animationDuration: `${duration}ms`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}
    >
      <div className="inner flex animate-loop gap-x-6">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <div className="tag rounded-md px-4 py-2 mr-4 shadow-md flex items-center gap-1 bg-[#f472b6] text-white">
    <span className="text-light-pink">#</span> {text}
  </div>
);

const TAGS = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'TailwindCSS',
  'React',
  'Next.js',
  'three.js',
  'Swift',
  'UI/UX',
  'FIGMA',
  'ADOBE',
  'illustrator',
  'photoshop',
  'GraphicDesign',
  'Canva',
  'SVG',
  'Animation',
  'WebDev',
];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteScrollAnimation: React.FC = () => {
  return (
    <div className="tag-list relative w-full mx-auto p-6 overflow-hidden space-y-4">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2 === 0}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={`${tag}-${i}`} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade absolute inset-0 pointer-events-none"></div>
    </div>
  );
};

export default InfiniteScrollAnimation;
