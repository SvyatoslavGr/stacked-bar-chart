import React, { useMemo } from 'react';
import './Chart.css';
import { ReactComponent as Dots } from '../../icons/dots.svg';
import Legend from '../Legend/Legend';
import Column from '../Column/Column';
import { getDiffs, getSums } from '../../utils/utils';
import ArrowLabel from '../ArrowLabel/ArrowLabel';

function Chart({
  title, results, target, labels,
}) {
  const columnSums = useMemo(() => getSums(results), [results]);
  const diffs = useMemo(() => getDiffs(columnSums), [columnSums]);
  const max = Math.max(...columnSums, target.value) || 1;

  return (
    <div className="chart-container">
      <header className="header">
        <h1 className="title">{`Количество пройденных тестов “${title}”`}</h1>
        <button className="details-btn" type="button" aria-label="Details">
          <Dots />
        </button>
      </header>
      <div className="content">
        <div className="chart">
          <ul className="columns">
            {results.map((el, i) => (
              <Column
                key={i}
                values={Object.values(results[i].data)}
                sum={columnSums[i]}
                max={max}
                label={results[i].label}
                index={i}
              />
            ))}
            <li className="column">
              <div className="bar target-bar" style={{ height: `calc(70% * ${target.value} / ${max})` }}>
                <span className="target-value">{target.value}</span>
              </div>
              <span className="label">{target.label}</span>
            </li>
          </ul>

          <div
            className="arrow-labels"
            style={{
              gridTemplateColumns: `repeat(${columnSums.length}, 1fr)`,
            }}
          >
            {diffs.map((el, i) => (
              <div className="arrow-label-container" key={i}>
                <ArrowLabel value={el} />
              </div>
            ))}
          </div>
        </div>
        <Legend labels={labels} />
      </div>
    </div>
  );
}

export default Chart;
