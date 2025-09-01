import FooterSection from "./components/footer";
import { HeroHeader } from "./components/header";
import HeroSection from "./components/hero-section";


export default function App(){
    return(
        <div>
           <HeroHeader />
            <HeroSection />
           <FooterSection />
        </div>
    )
}