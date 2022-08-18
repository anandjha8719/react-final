import InputTextarea from "../../components/input-textarea/input-textarea.component";
import OutputSection from "../../components/output-section/output-section.component";

const Home = () => {
  return (
    <div className="home-container">
      <section className="markdown">
        <InputTextarea />
        <OutputSection />
      </section>
    </div>
  );
}

export default Home;