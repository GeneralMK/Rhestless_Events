import React from 'react'
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import OrderSummary from './OrderSummary';
import PaymentForm from './PaymentForm';
import Step1 from './HostFormProgress/Step1';
import Step2 from './HostFormProgress/Step2';
import Step3 from './HostFormProgress/Step3';
import Step4 from './HostFormProgress/Step4';
import Step5 from './HostFormProgress/Step5';
import Step6 from './HostFormProgress/Step6';
import Step7 from './HostFormProgress/Step7';
import Step8 from './HostFormProgress/Step8';
import Step9 from './HostFormProgress/Step9';
const CreateEventForm = () => {
    const step1Content = <Step1 />;
    const step2Content = <Step2 />;
    const step3Content = <Step3 />;
    const step4Content = <Step4 />;
    const step5Content = <Step5 />;
    const step6Content = <Step6 />;
    const step7Content = <Step7 />
    const step8Content = <Step8/>
    const step9Content = <Step9 />
    function step2Validator() {
        return true;
      }
    
      function step3Validator() {
        // return a boolean
      }
  return (
<div className="App">

      <StepProgressBar
          previousBtnName="Prev"
              filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"

        startingStep={0}
    
        steps={[
          {
            label: "Type of event",
            name: "Type of event",
            content: step1Content
          },
          {
            label: "Type of event",
            name: "Type of event",
            content: step2Content
          },
          {
            label: "Number of attendees",
            name: "Number of attendees",
            content: step3Content
            // validator: step2Validator
          },
          {
            label: "Location",
            name: "Location",
            content: step4Content
            // validator: step2Validator
          },
          {
            label: "Pricing",
            name: "Pricing",
            content: step5Content
            // validator: step2Validator
          },
          {
            label: "Limiations",
            name: "Limitations",
            content: step6Content
            // validator: step2Validator
          },
          {
            label: "Upload images",
            name: "Upload Images",
            content: step7Content
            // validator: step2Validator
          },
          {
            label: "Name of your event",
            name: "Name of your event",
            content: step8Content
            // validator: step2Validator
          },
          {
            label: "Create your Description",
            name: "Create your Description",
            content: step9Content
            // validator: step2Validator
          },
        ]}
      />
    </div>
  )
}

export default CreateEventForm