import './pageCSS/home.css';

import Header from '../components/header';
import Core from '../components/core';

const Home = (props) => {



    return (
        <div className = 'home-wrapper'>
            <Header genres = {props.genres} films = {props.films} />

        </div>
    )
}

export default Home;