import { useState } from 'react';
import './App.css';

import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import CardWrapper from './components/CardWrapper/CardWrapper';

import MainProfile from './components/MainProfile/MainProfile';
import PoliticalProfile from './components/PoliticalProfile/PoliticalProfile';
import PhilanthropicProfile from './components/PhilanthropicProfile/PhilanthropicProfile';
import Assets from './components/Assets/Assets';
import Connections from './components/Connections/Connections';

function App() {
  // list of draggable cards 
  const [cards, setCards] = useState([
    { id: 'card-1', component: <PoliticalProfile /> },
    { id: 'card-2', component: <PhilanthropicProfile /> },
    { id: 'card-3', component: <Assets /> },
    { id: 'card-4', component: <Connections /> },
  ]);

  // activeId is id of currently dragged card
  const [activeId, setActiveId] = useState(null);

  // gets id of currently dragged card
  const handleDragStart = (event) => {
    const { active } = event;
    setActiveId(active.id);
  };

  //
  const handleDragEnd = (event) => {
    const { active, over } = event;

    // if active id not same as over id, card was moved to new position
    if (active.id !== over.id) {
      setCards((items) => {
        // find old and new positions of dragged item in array
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        // reorder array to reflect new positions
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  };

  // reset active id if drag is cancelled
  const handleDragCancel = () => {
    setActiveId(null);
  };

  const activeCard = cards.find((card) => card.id === activeId);

  return (
    <div className="container">
      <MainProfile />
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext 
          items={cards.map((card) => card.id)} 
          strategy={verticalListSortingStrategy}
        >
          {cards.map((card) => (
            <CardWrapper 
              key={card.id} 
              id={card.id} 
              activeId={activeId}
            >
              {card.component}
            </CardWrapper>
          ))}
        </SortableContext>
        <DragOverlay>
          {activeCard && (
            <div>
              {activeCard.component}
            </div>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

export default App;
