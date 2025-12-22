import Banner from "../components/ aboutsections/Banner";
import Vision from "../components/ aboutsections/Vision";
import Mission from "../components/ aboutsections/Mission";
import WhyAmrutdhhann from "../components/ aboutsections/WhyAmrutdhhann";
import OurJourney from "../components/ aboutsections/OurJourney";
import OurProducts from "../components/ aboutsections/OurProducts";
import AnimalWelfare from "../components/ aboutsections/AnimalWelfare";
import Investment from "../components/ aboutsections/Investment";
import Closing from "../components/ aboutsections/Closing";
import PurposeAndPromise from "../components/ aboutsections/Mission";


const About = () => {
  return (
    <>
      <Banner />
      <Vision />
      <PurposeAndPromise />
      <Investment />
      {/* <AnimalWelfare /> */}
      {/* <OurProducts /> */}
      {/* <WhyAmrutdhhann /> */}
      {/* <OurJourney /> */}
      <Closing />
    </>
  );
};

export default About;
