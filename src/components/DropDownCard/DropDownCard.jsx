import { useState } from 'react';
import grabHandle from '/assets/drag-handle-icon.svg';
import upArrow from '/assets/up-arrow-icon.svg';
import downArrow from '/assets/down-arrow-icon.svg';
import './DropDownCard.css'; 

function DropDownCard({ title, listeners, attributes, children }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div className="card dropdown-card">
      <div className="dropdown-card-header">
        <div className="dropdown-card-title">
          {title}
        </div>
        <div className="dropdown-card-header-btns">
          <div {...listeners} {...attributes}>
            <img
                id="grab-handle"
                src={grabHandle}
                alt="Grab Handle"
            />
          </div>
          <div className="card-dropdown-arrow" onClick={toggleExpanded}>
            {expanded ? (
                <img
                    id="dropdown-up-arrow"
                    src={upArrow}
                    style={{ width: '50px', height: '50px' }}
                    alt="Dropdown Up Arrow"
                />
            ) : (
                <img
                    id="dropdown-down-arrow"
                    src={downArrow}
                    style={{ width: '50px', height: '50px' }}
                    alt="Dropdown Down Arrow"
                />
            )}
          </div>
        </div>
      </div>

      {expanded && (
        <div className="card-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default DropDownCard;
