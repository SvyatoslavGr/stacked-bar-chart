import React from 'react';
import './App.css';
import Chart from './components/Chart/Chart';

const item = {
  title: 'OS Doors',
  dev: {
    front: 66,
    back: 100,
    db: 31,
  },
  test: {
    front: 60,
    back: 80,
    db: 31,
  },
  prod: {
    front: 66,
    back: 83,
    db: 31,
  },
  norm: 150,
};

const labels = ['Клиентская часть', 'Серверная часть', 'База данных'];

function App() {
  return (
    <div className="App container">
      <Chart
        title={item.title}
        results={[
          { label: 'dev', data: item.dev },
          { label: 'test', data: item.test },
          { label: 'prod', data: item.prod },
        ]}
        target={{ label: 'норматив', value: item.norm }}
        labels={labels}
      />
    </div>
  );
}

export default App;
