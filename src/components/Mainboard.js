import styled from 'styled-components'
import Pin from './Pin'
import './Mainboard.css'


const Mainboard = (props) => {

    let { pins } = props;


    return (
        <Wrapper>
            <Container>

                {pins.map((pin, index) => {

                    let { urls } = pin;
                    return <Pin key={index} urls={urls} />

                })}


            </Container>

        </Wrapper>
    );
};

export default Mainboard;

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 15px;
    justify-content: center;
    
`

const Container = styled.div`
    column-count: 5;
    column-gap: 5px;
    margin: 0 auto;
    height: 100%;
    max-width: 1260px;
    background-color:white;
`