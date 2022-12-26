import Button from "./components/Button";
import Input from "./components/Input";

import { useState } from "react";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const [showDecimal, setShowDecimal] = useState(false);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num: string) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation("");
    }
  };

  const handleMultipNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation("");
    }
  };

  const handleDivisNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const mult = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "/":
          handleDivisNumbers();
          break;
        case "*":
          handleMultipNumbers();
          break;
        default:
          break;
      }
    }
  };
  const handleSetComma = () => {
    setCurrentNumber((prev) => `${prev}${"."}`);
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultipNumbers} />
          <Button label="/" onClick={handleDivisNumbers} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." onClick={handleSetComma} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;