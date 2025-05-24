import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import {Input} from "./components/Input/index";
import { Card , CardTitle , CardFooter , CardDescription }
 from "./components/Card/index";
import Label from "./components/Label/Label";
import CheckBox from "./components/CheckBox/CheckBox";



const App = () => {
  const handleAlert = () => {
    alert("This is an alert");
  };

  const changeLog = () => {
    console.log("Value changed....");
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Add this line
        minWidth: "100vw",
        flexDirection: "column",
      }}
    >
      {/* <Button
        onClick={() => handleAlert()}
        style={{ marginBottom: "50px" }}
        className="btn-primary-l btn-2xl"
      >
        Custom Text
      </Button>

      <Input
        onChange={changeLog}
        type="text"
        placeholder="Enter Your Name"
        className="input-md"
      />

      <Card
        style={{ margin: "15px 0" }}
        size={'card-lg'}
      variant={'card-dark'}
     
      >
        <CardTitle variant={''} >Card Best</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus
          sed repudiandae libero architecto perferendis.
        </CardDescription>

<CardFooter style={{backgroundColor:'transparent'}}>

     <Button variant={'btn-primary-l'} size={'lg'}>Submit</Button>
     
</CardFooter>
           
      </Card> */}

<div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
  <CheckBox id="accept" />
  <Label htmlFor="accept" size="label-xl">
    Accept Terms & Conditions
  </Label>
</div>

    </div>
  );
};

export default App;
