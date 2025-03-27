<<<<<<< Updated upstream
function AboutUs() {
  return <section className="section bg-white h-screen">ABOUT US PAGE</section>;
=======
import Team from "../sections/Team";
import About from "../sections/About";
import Download from "../sections/Download";

function AboutUs() {
  return (
    <>
      <main className="py-75 gap-75 max-md:gap-25">
        <About />
        <Team />
        <Download />
      </main>
    </>
  );
>>>>>>> Stashed changes
}

export default AboutUs;
