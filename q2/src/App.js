import React from 'react';
import './App.css';

const objects = [
  { id: 1, name: 'John Doe', description: 'A human character', type: 'human', pictureDir: './images/man1.jpg' },
  { id: 2, name: 'Jane Smith', description: 'A human character', type: 'human', pictureDir: '/images/man2.jpg' },
  { id: 3, name: 'Jim Brown', description: 'A human character', type: 'human', pictureDir: '/images/woman1.jpg' },
  { id: 4, name: 'Jill White', description: 'A human character', type: 'human', pictureDir: '/images/woman2.jpg' },
  { id: 5, name: 'Mountain View', description: 'A beautiful landscape', type: 'landscape', pictureDir: '/images/landscap1.jpg' },
  { id: 6, name: 'Ocean Breeze', description: 'A beautiful landscape', type: 'landscape', pictureDir: '/images/landscape2.jpg' },
  { id: 7, name: 'Forest Path', description: 'A beautiful landscape', type: 'landscape', pictureDir: '/images/landscape3.jpg' },
  { id: 8, name: 'Desert Dunes', description: 'A beautiful landscape', type: 'landscape', pictureDir: '/images/landscape4.jpg' },
];

const App = () => {
  return (
    <div className="app">
      <h1>Humans and Landscapes</h1>
      <div className="grid">
        {objects.map(object => (
          <div key={object.id} className="card">
            <img src={object.pictureDir} alt={object.name} className="card-img" />
            <h2>{object.name}</h2>
            <p>{object.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
