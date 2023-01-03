import NavBar from '../components/Navbar';
import oracle from '../assets/sponsors/oracle.png';
import infosys from '../assets/sponsors/infosys.png';
import mahindra from '../assets/sponsors/mahindra.png';
import byjus from '../assets/sponsors/byjus.png';
import SponsorTile from '../components/sponsorTile';
import Page from "../components/page";
import SocialTile from '../components/SocialTile';

export default function Sponsors() {

    return (
        <Page>
            <NavBar active={'sponsors'} />
            <h2 className='pageHeading'>Event Sponsors</h2>
            <br />
            <SponsorTile sponsorOneName={'Oracle, Title Sponsor'} sponsorOneImage={oracle} sponsorTwoName={'Infosys'} sponsorTwoImage={infosys} />
            <SponsorTile sponsorOneName={'Byjus'} sponsorOneImage={byjus} sponsorTwoName={'Tech Mahindra'} sponsorTwoImage={mahindra} />
            <SocialTile />
        </Page>
    )
}