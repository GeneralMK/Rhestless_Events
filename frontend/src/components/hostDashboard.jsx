import React from 'react'
import styled from 'styled-components'
// import Navbar from './Navbar'
import Statistics from './Statistics'
import Sales from './Sales'
import Orders from './Orders'
import Analytics from './Analytics'
import Create from './CreateEventForm'
// import Shopping from './Shopping'


function hostDashboard() {
    return (
        <Section>
            <Navbar />
            <div className="grid">
                <div className="grid_1">
                    <Statistics />
                    <Sales />
                    <Orders />
                </div>
                <div className="grid_2">
                    <Analytics />
                    <Create /> 
                    {/* <Add /> */}
                </div>
            </div>
        </Section>
    )
}

export default hostDashboard
const Section = styled.section `
margin-left: 18vw;
padding: 2rem;
height: 100%;
.grid{
    display: grid;
    grid-template-columns: 70% 28%;
    gap: 2rem;
    margin-top: 2rem;
    .grid_1 {
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .grid_2 {
        z-index: 2;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
`;