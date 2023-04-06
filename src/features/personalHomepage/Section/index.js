import { SectionHeader, Bullet, Section, List, Item } from "./styled";

export const Skills = ({ title, skills }) => (
  <Section>
    <SectionHeader>{title}</SectionHeader>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>
          <Bullet />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);
