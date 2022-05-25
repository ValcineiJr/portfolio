import Link from 'next/link';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithubAlt,
  FaWhatsapp,
} from 'react-icons/fa';

import { Container } from './styles';

export function Footer() {
  const techs = [
    { name: `ReactJs`, slug: `https://pt-br.reactjs.org/` },
    { name: `NextJs`, slug: `https://nextjs.org/` },
    { name: `TypeScript`, slug: `https://www.typescriptlang.org/` },
    { name: `Firebase`, slug: `https://firebase.google.com/?hl=pt-br` },
    { name: `Styled-components`, slug: `https://styled-components.com/` },
    { name: `SWR`, slug: `https://swr.vercel.app/` },
    { name: `React-icons`, slug: `https://react-icons.github.io/react-icons` },
    { name: `Vercel`, slug: `https://vercel.com/` },
  ];

  const fastLinks = [
    { name: `Home`, slug: `/` },
    { name: `Projetos`, slug: `/projects` },
    { name: `Sobre`, slug: `/about` },
  ];

  const mediaIcons = [
    {
      slug: `https://www.facebook.com/valcinei.furtado`,
      icon: FaFacebookF,
      color: `#4267B2`,
    },
    {
      slug: `https://www.instagram.com/valcineijunior/`,
      icon: FaInstagram,
      color: `#E1306C`,
    },
    {
      slug: `https://www.linkedin.com/in/valcinei-junior-94aa16176/`,
      icon: FaLinkedinIn,
      color: `#0077B5`,
    },
    { slug: `https://github.com/ValcineiJr`, icon: FaGithubAlt, color: `#fff` },
    {
      slug: `https://api.whatsapp.com/send?phone=21988800405`,
      icon: FaWhatsapp,
      color: `#128C7E`,
    },
  ];

  return (
    <Container>
      <div className="wrapper">
        <section className="sobre">
          <h6>Sobre</h6>
          <p>Site construido com ♥ para armazenar todos os meus projetos.</p>
        </section>
        <div>
          <section>
            <h6>Tecnologias usadas</h6>
            <ul>
              {techs.map((item) => (
                <li key={item.name}>
                  <a
                    target="_blank"
                    aria-label={`Acessar a página ${item.name}`}
                    href={item.slug}
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Links Rápidos</h6>
            <ul>
              {fastLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.slug}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <div className="sub-footer">
        <span>
          Copyright © 2022 Valcinei Junior - Todos os direitos reservados
        </span>
        <div className="icons">
          <ul>
            {mediaIcons.map((item, index) => (
              <li key={item.slug}>
                <a
                  aria-label="Acesso direto para rede social"
                  target="_blank"
                  key={item.slug}
                  style={{ backgroundColor: item.color }}
                  href={item.slug}
                  rel="noreferrer"
                >
                  <item.icon color={index === 3 ? `#000` : `#fff`} size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
