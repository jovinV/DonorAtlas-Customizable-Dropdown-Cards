import './MainProfile.css'
import pfp from '/assets/pfp.png';

function MainProfile() {
    return (
        <div className="card main-profile">
            <div id="main-pfp-heading">
                <img id="main-pfp-pfp" src={pfp} alt=""/>
                <div id="main-pfp-heading-info">
                    <span id="main-pfp-name">Ryder Kessler</span>
                    <span id="main-pfp-location">New York NY</span>
                    <span id="main-pfp-donates">Donates to you</span>
                </div>
            </div>
            <div id="main-pfp-details">
                <span><strong>Age: </strong>29</span>
                <span><strong>Race: </strong>Caucasian</span>
                <span><strong>Sex: </strong>Male</span>
                <span><strong>Religion: </strong>Jewish</span>
            </div>
        </div>
    )
}

export default MainProfile