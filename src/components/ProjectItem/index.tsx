import { Container } from './styles';

import { Project } from '@/@types/any';

interface Props {
  data: Project;
}

export function ProjectItem({ data }: Props) {
  return (
    <Container>
      <h2>CAPTAIN FOREVER REMIX (2016)</h2>

      <div className="image">
        <figure>
          <img src="https://picsum.photos/300/200?image=244" />
        </figure>
      </div>

      {data.links.map((link) => (
        <div key={link} className="links">
          <span>Link: </span> <a href={link}>Portfolio Page</a>
        </div>
      ))}

      <p>{data.description}</p>

      <span>
        Tecnologias:{` `}
        {data.techs.map((tech) => (
          <span key={tech} className="tech">
            {tech} |
          </span>
        ))}
      </span>
    </Container>
  );
}
