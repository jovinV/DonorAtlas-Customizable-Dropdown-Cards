import DropDownCard from '../DropDownCard/DropDownCard';
import './PhilanthropicProfile.css'
import image from '/assets/philanthropic-profile.png';

function PhilanthropicProfile({ listeners, attributes }) {
  return (
    <DropDownCard
      title="Philanthropic Profile"
      listeners={listeners}
      attributes={attributes}
    >
      <div>
        <img id="political-profile-img" src={image}/>
      </div>
    </DropDownCard>
  );
}

export default PhilanthropicProfile;
