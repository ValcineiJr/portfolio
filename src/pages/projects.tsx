import { Header } from '@/components/Header';
import { ProjectItem } from '@/components/ProjectItem';

import { Project } from '@/@types/any';

import { Container } from '@/styles/pages/projects';
import { Footer } from '@/components/Footer';

export default function Projects() {
  const projects: Project[] = [];
  return (
    <>
      <Header />

      <Container>
        <h1>Projetos</h1>
        <section className="grid">
          {projects.map((item) => (
            <ProjectItem key={item.id} data={item} />
          ))}
        </section>
      </Container>
      <Footer />
    </>
  );
}
