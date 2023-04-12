import { useRef } from 'react';
import { useFetch } from '@/hooks/useFetch';

import { Header } from '@/components/Header';
import { ProjectItem } from '@/components/ProjectItem';
import { Footer } from '@/components/Footer';

import { Container } from '@/styles/pages/projects';

import exportAsImage from '@/utils/pageToScreen';

import { projects } from '@/utils/dummyData';

export default function Projects() {
  const node = useRef(null);

  return (
    <div ref={node}>
      <Header />

      <Container>
        {/* <h1 onClick={() => exportAsImage(node, `test2`)}>Projetos</h1> */}

        <section className="grid">
          {projects?.map((item) => (
            <ProjectItem key={item.id} data={item} />
          ))}
        </section>
      </Container>
      <Footer />
    </div>
  );
}
