import React, {useEffect, useState} from 'react';
import './JokesApp.css';
import Jokes from "../../components/Jokes/Jokes";
import Button from "../../components/UI/Button/Button";

const JOKES_URL = 'https://api.chucknorris.io/jokes/random';

const JokesApp = () => {
    const [jokes, setJokes] = useState([]);

    const fetchData = async () => {
        let jokes = [];
        for(let i = 0; i < 6; i++) {
            jokes.push(await fetch(JOKES_URL).then(response => response.ok && response.json()));
        }
        Promise.all(jokes)
            .then(jokes => setJokes(jokes))
            .catch(console.error);
    }

    useEffect(() => {
        fetchData().catch(console.error);
    }, []);

    let duration = 0.2;

    return (
        <div className="JokesApp">
            <Button
                type="button"
                label="new jokes"
                clicked={fetchData}
            />
            <div className="Jokes-box">
                {jokes.map(item => <Jokes
                    key={item.id}
                    avatar={item.icon_url}
                    value={item.value}
                    duration={duration += 0.3}
                />)}
            </div>
        </div>
    );
};

export default JokesApp;