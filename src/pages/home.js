import './pageCSS/home.css';

import Header from '../components/header';

const Home = (props) => {



    return (
        <div className = 'home-wrapper'>
            <Header genres = {props.genres} films = {props.films} alphaSort = {props.alphaSort} years = {props.years} />

        </div>
    )
}

export default Home;