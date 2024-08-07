import { HIGHLIGHT_COLORS } from '@/lib/constants';
import { useIsFontReady } from '@/lib/hooks/useIsFontReady';
import { shuffleArray } from '@/lib/shuffleArray';
import React, { useEffect, useState } from 'react';
import { RoughNotationGroup, RoughNotation } from 'react-rough-notation';
import Button from './Button';
// import LinkTo from './LinkTo';

const Landing = () => {
  const isFontReady = useIsFontReady();
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(shuffleArray(HIGHLIGHT_COLORS));
  }, []);
  return (
    <section className="flex items-center min-h-screen">
      <RoughNotationGroup show={isFontReady}>
        <div className="mb-48 space-y-3">
          <h1 className="heading dark:text-white">
            Hi, I&apos;m{' '}
            <span className="whitespace-nowrap">
              <RoughNotation
                type="underline"
                padding={[0, 1, -8, 1]}
                strokeWidth={2}
                color={colors[0]}
                animationDuration={800}
              >
                Quan Dinh
              </RoughNotation>
            </span>
          </h1>
          <h2 className="heading main text-subtext">
            Just another cat lover.
          </h2>

          <p className="max-w-2xl pt-3 md:text-lg dark:text-white">
            CS @ Purdue. <s>Couch potato.</s> Memer for life. (* ≧ ω ≦ *)
          </p>
          <div>
            <a href="https://bit.ly/dinh_the_quan">
              <Button className="mt-5">Resume</Button>
            </a>
          </div>
        </div>
      </RoughNotationGroup>
    </section>
  );
};

export default Landing;
