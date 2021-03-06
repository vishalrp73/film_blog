import './compCSS/core.css';
import { useState, useEffect } from 'react';
import MovieBox from './movieBox/movieBox';


const Core = (props) => {

    const [displayList, setDisplayList] = useState([]);
    const [films, setFilms] = useState(props.films);
    const [genList, setGenList] = useState(props.genres);
    const [term, setTerm] = useState();
    const [alphaList, setAlphaList] = useState({});
    const [sort, setSort] = useState(false);
    const [years, setYears] = useState({});
    const [randFilm, setRandFilm] = useState({});


    useEffect(() => {
        setDisplayList(props.display)
        setFilms(props.films)
        setTerm(props.search)
        setGenList(props.genres)
        setAlphaList(props.alphaSort)
        setSort(props.sort)
        setYears(props.years)
        setRandFilm(props.randFilm)

    }, [props])

    useEffect(() => {
        let randomNum = Math.floor(Math.random() * films.length - 0)
        try {
            let temp  = films[randomNum].title
            setRandFilm(temp)
        } catch (error) {
            console.log(error)
        }
        

    }, [sort])



    return (
        <div className = 'core-wrapper'>
            {
                (!term) ? 

                            (!sort) ? 
                

                                            Object.entries(genList).map(genre => (
                                                <div className = 'display-genre-wrapper'>
                                                    <h1 className = 'genre-title' id = 'gen_title'>{genre[0]}</h1>
                                                    <div className = 'genre-list-wrapper' id  = 'gen-list__id'>
                                                    {
                                                        genre[1].map(title => (<MovieBox movie = {title} films = {films} />))
                                                    }
                                                    </div>
                                                </div>
                                            ))
                                    
                                    : (sort == 1) ?
                                    
                                                Object.entries(alphaList).map(letter => (
                                                    <div className = 'display-genre-wrapper' >
                                                        <h1 className = 'genre-title'>{letter[0]}</h1>
                                                        <div className = 'genre-list-wrapper' id  = 'gen-list__id'>
                                                            {   
                                                                letter[1].map(title => (<MovieBox movie = {title} films = {films} />))
                                                            }
                                                        </div>
                                                    </div>
                                                )) : (sort == 2) ?

                                                        Object.entries(years).map(decade => (
                                                            <div className = 'display-genre-wrapper' >
                                                                <h1 className = 'genre-title'>{decade[0]}</h1>
                                                                <div className = 'genre-list-wrapper' id  = 'gen-list__id'>
                                                                    {
                                                                        decade[1].map(title => (<MovieBox movie = {title} films = {films} />))
                                                                    }
                                                                </div>
                                                            </div>
                                                        ))
                                                        
                                                        : (sort == 3) ? <div className = 'random_film-wrap'>
                                                                            <h2 className = 'random-film-text'>Here's a random film !</h2>
                                                                            <div className = 'rand_movie-box' >
                                                                                <MovieBox movie = {randFilm} films = {films} />
                                                                            </div>
                                                                        </div> 
                                                                        : console.log('ERROR: Films not found')

                :
                <div className = 'display-results-wrapper'>
                    {   displayList.map(item => (<MovieBox movie = {item.title} films = {films} />)) }
                </div>
                 
            }
        </div>
    )
}

export default Core;