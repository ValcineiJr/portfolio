import { useRef } from 'react';
import { useFetch } from '@/hooks/useFetch';

import { Header } from '@/components/Header';
import { ProjectItem } from '@/components/ProjectItem';
import { Footer } from '@/components/Footer';

import { Container } from '@/styles/pages/projects';

import exportAsImage from '@/utils/pageToScreen';

import { Project } from '@/@types/any';

export default function Projects() {
  const { data: projects } = useFetch<Project[]>(`projects/list`);
  const node = useRef(null);

  return (
    <div ref={node}>
      <Header />

      <Container>
        <h1 onClick={() => exportAsImage(node, `test2`)}>Projetos</h1>

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
