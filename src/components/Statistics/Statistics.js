import React from 'react';
import './Statistics.css';

const Statistics = ({ title, stats, deviation, lostData, calculationTime }) => {
  return (
    <section className='Statistics'>
      <h2 className='title'>{title}</h2>

      <div>
      <span className='label'>Среднее значение:</span>
        <span className='percentage'>{stats}</span>
      </div>

      <div>
        <span className='label'>Стандартное отклонение:</span>
        <span className='percentage'>{deviation}</span>
      </div> 

      <div>
        <span className='label'>Количество потерянных котировок:</span>
        <span className='percentage'>{lostData}</span>
      </div>
      
      <div>
        <span className='label'>Время расчетов:</span>
        <span className='percentage'>{calculationTime}мс</span>
      </div>
    </section>
  );
};

export default Statistics;
