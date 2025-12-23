import Banner from "../components/ aboutsections/Banner";
import Vision from "../components/ aboutsections/Vision";


import Closing from "../components/ aboutsections/Closing";
import PurposeAndPromise from "../components/ aboutsections/Mission";
import EarningModel from "../components/homesections/EarningModel";


const About = () => {
  return (
    <>
      <Banner />
      <Vision />
      <PurposeAndPromise />
      {/* <Investment /> */}
      <EarningModel/>
      {/* <AnimalWelfare /> */}
      {/* <OurProducts /> */}
      {/* <WhyAmrutdhhann /> */}
      {/* <OurJourney /> */}
      <Closing />
    </>
  );
};

export default About;
