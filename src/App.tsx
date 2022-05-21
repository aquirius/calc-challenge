import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/button';
import styled from 'styled-components';


const StyledButtons = styled.div`
  text-align: center;
  max-width: 250px;
`;

const StyledOperations = styled.div`
  text-align: right;
`;

const StyledResult = styled.div`
  text-align: left;
  max-width: 350px;
  height: 150px;
  background: lime;
  font-color: black;
  font-size: 1rem;
  overflow: auto;
`;
const StyledResultValue = styled.div`
  font-size: 2rem;
`;

const StyledResultOperation = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;


const StyledCalculator = styled.div`
  display:grid;
  background: grey;
  grid-template-columns:250px 50px;
  gap: 5px;
  max-width: 350px;
  `;

interface CalculatorOperation {
  operation : string;
  value : string;
}

function calc(history : Array<CalculatorOperation>) : number {
  var res = 0;

  history.map((item) => {
    let val: number
    if (item.value !== ""){
      val = parseInt(item.value)
    } else {
      val = 0
    }
    console.log(item, res, val)
    switch(item.operation) { 
      case "+": { 
        res = res + val
        break; 
      } 
      case "-": { 
        res = res - val
         break; 
      } 
      case "*": { 
        res = res * val
        break; 
      } 
      case "/": { 
        res = res / val
        break; 
      }
      case "=":{
        break;
      }
      default:{
        res =  res + val
      }
   }
  })
  console.log(res)
  return res
}

function App() {
  const [input, setInput] = useState({
    operation : "",
    value : "",
  })

  const [history, setHistory] = useState<Array<CalculatorOperation>>([]);
  const [result, setResult] = useState<number|undefined>();

  useEffect(() => {
    setHistory([...history,{operation : input.operation, value : input.value}])

    if (input.operation === "="){
      setResult(calc(history))
    }
    if (input.operation !== ""){
      setInput({operation : "", value : ""})
    }

    //reset our input

  }, [input])

  return (
    <>
    <StyledResult>
    {history.map((item)=>{
      return (
        <>
        <StyledResultValue>{item.value}</StyledResultValue>
        <StyledResultOperation>{item.operation}</StyledResultOperation>
       </>
      )
    })}
    {result && <StyledResultValue>{result}</StyledResultValue>}
    </StyledResult>
    <StyledCalculator>
      <StyledButtons >
        <Button value='1' onClick={() =>  setInput({...input, value : input.value+"1"})}/>
        <Button value='2' onClick={() =>  setInput({...input, value : input.value+"2"})}/>
        <Button value='3' onClick={() =>  setInput({...input, value : input.value+"3"})}/>
        <Button value='4' onClick={() =>  setInput({...input, value : input.value+"4"})}/>
        <Button value='5' onClick={() =>  setInput({...input, value : input.value+"5"})}/>
        <Button value='6' onClick={() =>  setInput({...input, value : input.value+"6"})}/>
        <Button value='7' onClick={() =>  setInput({...input, value : input.value+"7"})}/>
        <Button value='8' onClick={() =>  setInput({...input, value : input.value+"8"})}/>
        <Button value='9' onClick={() =>  setInput({...input, value : input.value+"9"})}/>
        <Button value='0' onClick={() =>  setInput({...input, value : input.value+"0"})}/>
      </StyledButtons>
      <StyledOperations >
        <Button value='+' onClick={() => setInput({...input, operation : "+"})}/>
        <Button value='-' onClick={() => setInput({...input, operation : "-"})}/>
        <Button value='*' onClick={() => setInput({...input, operation : "*"})}/>
        <Button value='/' onClick={() => setInput({...input, operation : "/"})}/>
        <Button value='=' onClick={() => setInput({...input, operation : "="})}/>
      </StyledOperations>
    </StyledCalculator>
    </>
  );
}

export default App;
