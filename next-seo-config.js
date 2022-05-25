const title = 'Valcinei Jr - Meu portifólio.';
const description = 'Portifólio pessoal para colocar todos os meus projetos.';

const SEO = {
  title,
  description,
  canonical: 'https://valcineijr-portfolio.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://valcineijr-portfolio.vercel.app/',
    title,
    description,
    images: [
      { url: 'https://ibb.co/cTTcrfJ', alt: title, width: 1280, height: 720 },
      { url: 'https://ibb.co/CK3YB4t', alt: title, width: 1280, height: 720 },
    ],
  },
};

export default SEO;
