import { useTheme } from 'next-themes';
import React from 'react';
import { BsMoon } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';
import { useIsMounted } from '@/lib/hooks/useIsMounted';
import LinkTo from './LinkTo';

const ThemeToggleButton = ({
  onClick,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 dark:focus:ring-gray-500 dark:hover:bg-gray-700"
      {...rest}
    >
      {children}
    </button>
  );
};
const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <header className=" nav">
      <nav className="flex items-center justify-between flex-1 max-w-[1920px]">
        <div className="grid grid-flow-col gap-10">
          <div>
            <LinkTo
              href="/"
              className="text-current text-black no-underline dark:text-white hover:text-current"
            >
              <span className="font-bold ">QUAN DINH</span>
            </LinkTo>
          </div>
          <div>
            <LinkTo
              href="/album"
              className="text-black no-underline hover:text-current dark:text-white"
            >
              Album
            </LinkTo>
          </div>
          </div>
        <div>
          {isMounted &&
            (resolvedTheme === 'light' ? (
              <ThemeToggleButton
                onClick={() => setTheme('dark')}
                aria-label="Dark mode toggle"
              >
                <BsMoon size="1.25rem" />
              </ThemeToggleButton>
            ) : (
              <ThemeToggleButton onClick={() => setTheme('light')}>
                <HiSun
                  size="1.25rem"
                  className="text-white"
                  aria-label="Light mode toggle"
                />
              </ThemeToggleButton>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
