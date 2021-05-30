import styled from 'styled-components'
import Pin from './Pin'
import './Mainboard.css'


const Mainboard = (props) => {

    let { pins } = props;


    return (

        <div className="mainboard__container">

            {pins.map((pin, index) => {

                let { urls } = pin;
                return <Pin key={index} urls={urls} />

            })}


        </div>


    );
};

export default Mainboard;
