import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function CardWrapper({ id, children, activeId }) {

  // useSortable hook provides utilties needed to make cards sortable
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id });


  // inject the drag attributes and listeners into child (which would be a card),
  // so that card has necessary props for drag drop functionality
  const cardWithProps = React.cloneElement(children, { listeners, attributes });

  return (
    // set the ref to container so @dnd-kit can measure and track card's position
    <div 
      ref={setNodeRef} 
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: activeId === id ? 0 : 1,   // hide original card when being dragged
      }}
    >
      {cardWithProps}
    </div>
  );
}

export default CardWrapper;
