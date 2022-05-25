/* eslint-disable @next/next/no-img-element */
import { Header } from '@/components/Header';
import { useScroll } from '@/hooks/useScroll';

import { MdScreenshot } from 'react-icons/md';
import { FaMobileAlt, FaRobot, FaWhatsapp } from 'react-icons/fa';

import { Container, CardBody } from '@/styles/pages/home';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

import banner from '@/assets/img/banner.gif';

export default function Home() {
  useScroll();

  const { colors } = useTheme();

  const features = [
    {
      id: `1`,
      title: `100% Responsivo`,
      description: `Criação de sites totalmente resposivos.`,
      icon: MdScreenshot,
    },
    {
      id: `2`,
      title: `SEO`,
      description: `Sites planejados para funcionar a favor dos motores de busca.`,
      icon: FaRobot,
    },
    {
      id: `3`,
      title: `Mobile`,
      description: `Criação de aplicativos nativos, pra IOS e Android`,
      icon: FaMobileAlt,
    },
  ];

  const Card = () => (
    <CardBody>
      <div className="slide slide1">
        <div className="content">
          <div className="image">
            <img src="https://github.com/valcineijr.png" alt="" />
          </div>
        </div>
      </div>

      <div className="slide slide2">
        <div className="content">
          <h3>Nome do projeto</h3>
          <p>Pequena descrição falando sobre o que o projeto se refere.</p>
          <div className="link">
            <span>Link: </span>
            <Link aria-label="Acessar o projeto" href="/5">
              Ir para o projeto
            </Link>
          </div>
        </div>
      </div>
    </CardBody>
  );

  return (
    <>
      <Header />
      <Container>
        <section className="intro ">
          <h6>Apresentação dos meus trabalhos</h6>
          <h1>Valcinei Furtado Cardozo Junior</h1>
          <p>Adoro programar e aprender coisas novas!</p>
          <p className="rating-text">
            Sinta-se à vontade para entrar em contato ou dar uma olhada nos meus
            trabalhos anteriores abaixo.
          </p>
        </section>

        <section className="features reveal fade-left">
          {features.map((item) => (
            <div key={item.id} className="box">
              <item.icon color={colors.primary} size={34} />
              <div className="info">
                <h3 className="title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="show-case">
          <div className="wrapper">
            <div className="image reveal fade-left">
              <Image
                width={600}
                height={600}
                src={banner}
                priority
                alt="homem mexendo em telas de computador"
              />
            </div>

            <div className="information reveal fade-right">
              <h6>Design é tudo</h6>
              <h2>Apresente seus sites da melhor forma.</h2>
              <p>Ficou interessado?</p>
              <p>Entre em contato pelo botão abaixo.</p>

              <a
                aria-label="Iniciar conversa pelo whatsapp"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=21988800405"
                rel="noreferrer"
              >
                <FaWhatsapp size={30} /> Chamar no Whatsapp
              </a>
            </div>
          </div>
        </section>

        <section className="feedbacks ">
          <div className="description reveal fade-bottom">
            <h6>Projetos</h6>
            <h1>Últimos projetos públicos.</h1>
            <p>
              Você pode conferir todos os meus projetos clicando no link abaixo,
              clique em um projeto pra mais informações.
            </p>
            <Link aria-label="Ir para todos os projetos" href="/projects">
              Ver todos
            </Link>
          </div>

          <div className="grid reveal fade-bottom">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <Footer />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
