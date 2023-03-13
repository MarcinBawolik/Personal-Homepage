import {
    SectionDivider,
    SectionHeader,
    SectionList,
    SectionListItem,
    SectionSkillWrapper,
    StyledSection
} from "./style";


export const Section = ({ title }) => (
    <>
        <StyledSection>
            <SectionHeader>{title}</SectionHeader>
            <SectionDivider />
            <SectionSkillWrapper>
                <SectionList>
                    <SectionListItem>Semantic & accessibe HTML</SectionListItem>
                    <SectionListItem>Responsive Web Design</SectionListItem>
                    <SectionListItem>TeamWork</SectionListItem>
                    <SectionListItem>Markdown</SectionListItem>
                    <SectionListItem>Immutabilty</SectionListItem>
                    <SectionListItem>CSS BEM convention</SectionListItem>
                    <SectionListItem>CSS Grid</SectionListItem>
                    <SectionListItem>CSS Flexbox</SectionListItem>
                </SectionList>
                <SectionList>
                    <SectionListItem>React Router</SectionListItem>
                    <SectionListItem>Redux-Saga</SectionListItem>
                    <SectionListItem>Redux (toolkit)</SectionListItem>
                    <SectionListItem>React Hooks</SectionListItem>
                    <SectionListItem>Error handling</SectionListItem>
                    <SectionListItem>Working with API (fetch, axios)</SectionListItem>
                    <SectionListItem>JavaScript: ES6+</SectionListItem>
                </SectionList>
                <SectionList>
                    <SectionListItem>Promises, Async/Await</SectionListItem>
                    <SectionListItem>GitHub Pull Requests & Review</SectionListItem>
                    <SectionListItem>Trello</SectionListItem>
                    <SectionListItem>Scrum</SectionListItem>
                    <SectionListItem>NPM</SectionListItem>
                    <SectionListItem>React</SectionListItem>
                    <SectionListItem>Git</SectionListItem>
                </SectionList>
            </SectionSkillWrapper>
        </StyledSection>
    </>
)

export const ShortSection = ({ title }) => (
    <StyledSection>
        <SectionHeader>{title}</SectionHeader>
        <SectionDivider />
        <SectionSkillWrapper>
            <SectionList>
                <SectionListItem>React Context</SectionListItem>
                <SectionListItem>Node.js</SectionListItem>
            </SectionList>
            <SectionList>
                <SectionListItem>Cypress</SectionListItem>
                <SectionListItem>Unit testing</SectionListItem>
            </SectionList>
            <SectionList>
                <SectionListItem>TypeScript</SectionListItem>
                <SectionListItem>JS classes</SectionListItem>
            </SectionList>
        </SectionSkillWrapper>
    </StyledSection>
)