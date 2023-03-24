import { Contact } from "./Contact";
import { Wrapper } from "./GlobalStyle";
import Informations from "./Informations";
import { Section, ShortSection } from "./Section";
import { Tiles } from "./Tile";

function PersonalHomepage() {
  return (
    <Wrapper>
      <Informations />
      <main>
        <Section title="My skillset includes 🛠️" />
        <ShortSection title="What i want to learn next 🚀" />
        <Tiles />
      </main>
      <Contact />
    </Wrapper>
  );
}

export default PersonalHomepage;
