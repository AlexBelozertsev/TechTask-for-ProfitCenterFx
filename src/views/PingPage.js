import React, {useState} from 'react';
import AppBar from '../components/AppBar';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Container from '../components/Container';

const PingPage = () => {
  const [adress, setText] = useState('');
    const [calculationTime, setCalculationTime] = useState(0);
    
    const handleChange = ({ target: { name, value } }) => setText(value);

function ping(ip) {
  var ws = new WebSocket(ip);
  ws.onerror = function(e){
    ws.onopen = function () {
      console.log("Соединение установлено")
    }
    ws = null;
  };
  setTimeout(function() { 
    if(ws != null) {
      ws.close();
      ws = null;
      ws.onclose = function () {
      console.log("Соединение разорвано")
    };
    }
  }, 2000);
    
}    const handleSubmit = e => {
    e.preventDefault();
    return setCalculationTime(ping(adress))
    }



    return (
        <>
            <AppBar text="Пингователь" />
            <Container>
                <Form onSubmit={handleSubmit} autoComplete={'off'}>
                    <Input
                        type={'text'}
                        name={'text'}
                        value={adress}
                        onChange={handleChange}
                    />
                    <Button type={'submit'} name='Enter' />
                </Form>
                <div>
                    <span>Результат: </span>
                    <span>{calculationTime}</span>
                </div>
            </Container>
        </>
    );
}
 
export default PingPage;
