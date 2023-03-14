import {
  SectionDivider,
  SectionHeader,
  SectionList,
  SectionListItem as SectionLi,
  LiBullet,
  LiWrapper,
  SectionSkillWrapper,
  StyledSection,
} from "./style";

export const Section = ({ title }) => (
  <>
    <StyledSection>
      <SectionHeader>{title}</SectionHeader>
      <SectionDivider />
      <SectionSkillWrapper>
        <SectionList>
          <LiWrapper>
            <LiBullet />
            <SectionLi>Semantic & accessibe HTML</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet />
            <SectionLi>Responsive Web Design</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet />
            <SectionLi>TeamWork</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>Markdown</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>Immutabilty</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>CSS BEM convention</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>CSS Grid</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>CSS Flexbox</SectionLi>
          </LiWrapper>
        </SectionList>
        <SectionList>
          <LiWrapper>
            <LiBullet /> <SectionLi>React Router</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>Redux-Saga</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>Redux (toolkit)</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>React Hooks</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>Error handling</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>Working with API (fetch, axios)</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>JavaScript: ES6+</SectionLi>
          </LiWrapper>
        </SectionList>
        <SectionList>
          <LiWrapper>
            <LiBullet /> <SectionLi>Promises, Async/Await</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>GitHub Pull Requests & Review</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>Trello</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>Scrum</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>NPM</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>React</SectionLi>
          </LiWrapper>
          <LiWrapper>
            <LiBullet /> <SectionLi>Git</SectionLi>
          </LiWrapper>
        </SectionList>
      </SectionSkillWrapper>
    </StyledSection>
  </>
);

export const ShortSection = ({ title }) => (
  <StyledSection>
    <SectionHeader>{title}</SectionHeader>
    <SectionDivider />
    <SectionSkillWrapper>
      <SectionList>
        <LiWrapper>
          <LiBullet />
          <SectionLi>React Context</SectionLi>
        </LiWrapper>
        <LiWrapper>
          <LiBullet />
          <SectionLi>Node.js</SectionLi>
        </LiWrapper>
      </SectionList>
      <SectionList>
        <LiWrapper>
          <LiBullet />
          <SectionLi>Cypress</SectionLi>
        </LiWrapper>
        <LiWrapper>
          <LiBullet />
          <SectionLi>Unit testing</SectionLi>
        </LiWrapper>
      </SectionList>
      <SectionList>
        <LiWrapper>
          <LiBullet />
          <SectionLi>TypeScript</SectionLi>
        </LiWrapper>
        <LiWrapper>
          <LiBullet />
          <SectionLi>JS classes</SectionLi>
        </LiWrapper>
      </SectionList>
    </SectionSkillWrapper>
  </StyledSection>
);
