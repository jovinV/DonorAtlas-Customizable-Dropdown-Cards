import DropDownCard from '../DropDownCard/DropDownCard';
import './Assets.css'
import image from '/assets/assets.png';

function Assets({ listeners, attributes }) {
  return (
    <DropDownCard
      title="Assets"
      listeners={listeners}
      attributes={attributes}
    >
      <div>
      <img id="assets-img" src={image}/>
      </div>
    </DropDownCard>
  );
}

export default Assets;
