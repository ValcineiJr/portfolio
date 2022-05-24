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

      {[`1`, `2`].map((link) => (
        <div key={link} className="links">
          <span>Link: </span> <a href={link}>Portfolio Page</a>
        </div>
      ))}

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod labore ad
        recusandae quisquam explicabo nulla vero doloribus impedit dolorem unde
        officia libero modi, consequatur velit quasi commodi pariatur laudantium
        nam!
      </p>

      <span>
        Tecnologias:{` `}
        {[`1`, `2`, `3`, `4`, `5`, `6`].map((tech) => (
          <span key={tech} className="tech">
            ReactJs |
          </span>
        ))}
      </span>
    </Container>
  );
}
