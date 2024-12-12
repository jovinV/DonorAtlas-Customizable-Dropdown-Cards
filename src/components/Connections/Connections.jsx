import DropDownCard from '../DropDownCard/DropDownCard';
import './Connections.css'
import image from '/assets/connections.png';

function Connections({ listeners, attributes }) {
  return (
    <DropDownCard
      title="Connections"
      listeners={listeners}
      attributes={attributes}
    >
      <div>
      <img id="connections-img" src={image}/>
      </div>
    </DropDownCard>
  );
}

export default Connections;
