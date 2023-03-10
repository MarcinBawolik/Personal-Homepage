import { Contact } from "./Contact";
import { Wrapper } from "./GlobalStyle";
import Informations from "./Informations";
import { Section, ShortSection } from "./Section";
import { Tiles } from "./Tile";
function App() {
  return (
<>
<Wrapper>
<Informations />
<Section
      title="My skillset includes 🛠️"
    />
    <ShortSection  
    title= "What i want to learn 🚀"
    />
    <Tiles />
    <Contact />
</Wrapper>
</>
  );
}

export default App;
