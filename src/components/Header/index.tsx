import { useState } from 'react';

import { useScroll } from '@/hooks/useScroll';

import Link from 'next/link';

import cx from 'classnames';

import { FiMenu } from 'react-icons/fi';
import { VscChromeClose, VscFileSubmodule } from 'react-icons/vsc';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import { Container } from './styles';
import { useTheme } from '@/hooks/useTheme';

export function Header() {
  const [toggle, setToggle] = useState(false);
  const { scrollY } = useScroll();
  const { theme, themes, changeTheme } = useTheme();

  const menuItens = [
    { name: `Home`, slug: `/` },
    { name: `Projetos`, slug: `/projects` },
  ];

  return (
    <Container scroll={scrollY}>
      <div className="wrapper">
        <div className="logo brand">
          <VscFileSubmodule size={30} />
          MPortfolio
        </div>
        <nav className={cx({ toggle })}>
          <VscChromeClose
            onClick={() => setToggle(false)}
            className="close show-mobile"
            size={30}
          />

          <div className="logo-mobile show-mobile brand">
            <VscFileSubmodule size={30} />
            <span>MPortfolio</span>
          </div>
          <ul>
            {menuItens.map((item) => (
              <li key={item.name}>
                <Link href={item.slug}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          onClick={() => setToggle(false)}
          className={cx(`overlay`, { toggle })}
        ></div>

        <FiMenu
          onClick={() => setToggle((state) => !state)}
          className="menu-icon show-mobile"
          size={30}
        />

        <button
          onClick={() =>
            changeTheme(theme === themes.light ? themes.dark : themes.light)
          }
        >
          {theme === themes.light ? (
            <BsFillSunFill size={20} />
          ) : (
            <BsFillMoonFill size={20} />
          )}
        </button>
      </div>
    </Container>
  );
}
