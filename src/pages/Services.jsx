import ServicesHero from "../components/service/ServicesHero";
import CoreServices from "../components/service/CoreServices";
import WhoCanBenefit from "../components/service/WhoCanBenefit";
import ReliableIncome from "../components/service/ReliableIncome";
import DairyEcosystem from "../components/service/DairyEcosystem";
import TransparencyTrust from "../components/service/TransparencyTrust";



const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ReliableIncome />
      <CoreServices />
      <WhoCanBenefit />
      <DairyEcosystem />
      <TransparencyTrust />
    </div>
  )
}
export default Services;