import React from 'react';
import './App.css';
import Chart from './components/Chart/Chart';
import useFetch from './hooks/useFetch';

const urls = [
  'https://rcslabs.ru/ttrp1.json',
  'https://rcslabs.ru/ttrp2.json',
  'https://rcslabs.ru/ttrp3.json',
  'https://rcslabs.ru/ttrp4.json',
  'https://rcslabs.ru/ttrp5.json',
];

const labels = ['Клиентская часть', 'Серверная часть', 'База данных'];

function App() {
  const { data, isLoading } = useFetch(urls);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className="App container">
      {!!data.length && data.map((el, i) => (
        <Chart
          key={i}
          title={el.title}
          results={[
            { label: 'dev', data: el.dev },
            { label: 'test', data: el.test },
            { label: 'prod', data: el.prod },
          ]}
          target={{ label: 'норматив', value: el.norm }}
          labels={labels}
        />
      ))}
    </div>
  );
}

export default App;
