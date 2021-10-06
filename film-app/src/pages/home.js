import './pageCSS/home.css';

import Header from '../components/header';
import Footer from '../components/footer';

const Home = (props) => {



    return (
        <div className = 'home-wrapper'>
            <Header genres = {props.genres} films = {props.films} alphaSort = {props.alphaSort} years = {props.years} />
            <Footer />
        </div>
    )
}

export default Home;