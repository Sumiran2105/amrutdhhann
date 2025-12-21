import ServicesHero from "../components/servicesections/ServicesHero";
import CoreServices from "../components/servicesections/CoreServices";
import WhoCanBenefit from "../components/servicesections/WhoCanBenefit";
import ReliableIncome from "../components/servicesections/ReliableIncome";
import DairyEcosystem from "../components/servicesections/DairyEcosystem";
import TransparencyTrust from "../components/servicesections/TransparencyTrust";



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