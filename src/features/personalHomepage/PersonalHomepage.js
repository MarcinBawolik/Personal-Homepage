import { Footer } from "./Footer";
import Informations from "./Informations";
import { nextSkills, skills } from "./Section/skillsData";
import { Tiles } from "./Tile";
import { Container } from "./styled";
import { Skills } from "./Section/index"

function PersonalHomepage() {
  return (
    <Container>
      <Informations />
      <main>
        <Skills 
         title="My skillset includes 🛠️" 
         skills={skills} 
        />

        <Skills 
         title="What i want to learn next 🚀"
         skills={nextSkills}
        />
        <Tiles />
      </main>
      <Footer />
    </Container>
  );
}

export default PersonalHomepage;
