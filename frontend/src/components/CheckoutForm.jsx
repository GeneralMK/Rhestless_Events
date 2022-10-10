import React from 'react'
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import OrderSummary from './OrderSummary';
import PaymentForm from './PaymentForm';
const CheckoutForm = () => {
    const step1Content = <OrderSummary />;
    const step2Content = <PaymentForm />;
    const step3Content = <h1>dgdfgfdgdfg</h1>;
    function step2Validator() {
        return true;
      }
    
      function step3Validator() {
        // return a boolean
      }
  return (
<div className="App">
      <StepProgressBar
              filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"

        startingStep={0}
        previousBtnName="Prev"
        steps={[
          {
            label: "Details",
            name: "Details",
            content: step1Content
          },
          {
            label: "Payment",
            name: "Payment",
            content: step2Content
          },
          {
            label: "Finish",
            name: "Finish",
            content: step3Content
            // validator: step2Validator
          },
         
        ]}
      />
    </div>
  )
}

export default CheckoutForm