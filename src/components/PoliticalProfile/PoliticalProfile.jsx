import DropDownCard from '../DropDownCard/DropDownCard';
import './PoliticalProfile.css'
import image from '/assets/political-profile.png';

function PoliticalProfile({ listeners, attributes }) {
  return (
    <DropDownCard
      title="Political Profile"
      listeners={listeners}
      attributes={attributes}
    >
      <div>
        <img id="political-profile-img" src={image}/>
      </div>
    </DropDownCard>
  );
}

export default PoliticalProfile;
