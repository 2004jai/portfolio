import React from "react";
import NavBar from "../components/Navbar";
import { imageStyleActivity, pageClass, pageStyleActivity, isMobile } from "../services";
import hackaton from '../assets/activities/hackathon.png';
import roboSoccer from '../assets/activities/roboSoccer.png';
import ActivityTile from "../components/activityTile";
import backgroundCSS from '../css/activities.css'
import Page from "../components/page";

export default function ActivitiesPage() {
    return (
        <Page>
            <NavBar active={'activities'} scrollSnap={true}/>
            <ActivityTile image={hackaton} scrollSnap={false} heading={'Hackathon'}>
                Teams compete against one another in an exciting coding competition, the team which solves the gives problem the best wins<br />
                <b>Participation</b>: Team of 4 <br />
                <b>Rewards</b>: ₹5000, ₹2000, Goodies, for first, second and third winners respectively
            </ActivityTile>
            <ActivityTile image={roboSoccer} scrollSnap={true} heading={'Robot Soccer'}>
                Teams compete against one another in an exciting soccer competition with robots build by them.<br />
                <b>Participation</b>: Individual <br />
                <b>Rewards</b>: ₹5000, ₹2000, Goodies, for first, second and third winners respectively
            </ActivityTile>
        </Page>
    );
}