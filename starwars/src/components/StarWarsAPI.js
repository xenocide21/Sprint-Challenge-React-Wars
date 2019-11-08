import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsList(){

    const [people, setPeople] = useState([]);

    useEffect(() =>{
        axios.get(`https://lambda-swapi.herokuapp.com/api/people/`)
            .then(response =>{
                console.log(`React Wars API`, response);
                const dataResults = response.data.results;
                const people = setPeople(dataResults);
                console.log(people);
            })
            .catch(err =>{
                console.log(`There was an error fetching data!`, err);
            })
    }, []);

    return (
        <div>
            {people.map((p, i) => {
                return(
                    <div key={i}>
                        <StarWarsCard
                            name={p.name}
                            birth_year={p.birth_year}
                            gender={p.gender}
                            height={p.height}
                            mass={p.mass}
                            hair_color={p.hair_color}
                            eye_color={p.eye_color}
                            skin_color={p.skin_color}
                        />
                    </div>
                )
            })}
        </div>
    )
}