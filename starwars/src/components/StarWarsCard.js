import React from 'react';
import styled from "styled-components";

const Card = styled.div`
width: 250px;
margin: 2%;
margin-top: 30px;
background: crimson;
border: 2px solid black;
display: flex;
flex-direction: column;
border-radius: 50px 5px;
justify-content: space-between;
`;

const Columns = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
`;

const Text = styled.div`
font-size: 1rem;
color: #fff;
display: flex;
align-items: center;
padding-bottom: 20px;
`;

const Title = styled.div`
font-size 2rem;
color: #fff;
padding: 30px 0 0;
`;


const StarWarsCard = props =>{
    // console.log(props);
    return (
            <Card>
              <div>
                <Title>{props.name}</Title>
                  {Image}
              </div>
              <Columns>
                <Text className="text">Birth year: {props.birth_year}</Text>
                <Text className="text">Gender: {props.gender}</Text>
                <Text className="text">Height: {props.height}cm</Text>
                <Text className="text">Mass: {props.mass}kg</Text>
                <Text className="text">Hair color: {props.hair_color}</Text>
                <Text className="text">Eye color: {props.eye_color}</Text>
                <Text className="text">Skin color: {props.skin_color}</Text>
              </Columns>
            </Card>
)
};

export default StarWarsCard;