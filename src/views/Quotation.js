import React, {useState, useEffect} from 'react';
import AppBar from '../components/AppBar';
import Button from '../components/Button';
import Container from '../components/Container';
import Statistic from '../components/Statistics';

const socket = new WebSocket('wss://trade.trademux.net:8800/?password=1234');

export default function Quotation() {
  const [values, setValues] = useState([]);
  const [averageValue, setAverageValue] = useState(0);
  const [standardDeviation, setStandardDeviation] = useState(0);
  const [lostData, setLostData] = useState(0);
  const [calculationTime, setCalculationTime] = useState(0);

  useEffect(() => {
    socket.onopen = function () {
      console.log("Соединение установлено")
    };

    return () => {
      socket.onclose = function () {
      console.log("Соединение разорвано")
    };
    }
  }, [])

  const startSocket = () => {
    reset();
    socket.onmessage = function (event) {
      const data = JSON.parse(event.data);
      setValues([data.value, ...values])
    }
  };

  const getNumberLostedItem = (array) => array.reduce((a, v) => !v ? a + 1 : a, 0)

  const getAverageValue = (array) => array.reduce((a, b) => a + b / array.length) 
  
  const getStandardDeviation = (array, averageValue) => {
    return Math.sqrt(array.map(x => Math.pow(x - averageValue, 2)).reduce((a, b) => a + b) / array.length)
  }

  const reset = () => {
    setAverageValue(0);
    setStandardDeviation(0);
    setLostData(0);
    setCalculationTime(0);
  }

  const calculateResponse = () => {
    reset();
    const startTime = Date.now();
    setLostData(getNumberLostedItem(values));
    setAverageValue(getAverageValue(values));
    setStandardDeviation(getStandardDeviation(values, averageValue));
    const endTime = Date.now();
    setCalculationTime(endTime - startTime);

  };

  return (
    <>
      <AppBar text="Статистика по котировкам биржи" />
      <Container>
        <Button onClick={startSocket} name='Старт' />
        <Button onClick={calculateResponse} name='Статистика' />
        <Statistic
          title='Котировки'
          stats={averageValue}
          deviation={standardDeviation}
          lostData={lostData}
          calculationTime={calculationTime}
        />
      </Container>
    </>
  );
}
