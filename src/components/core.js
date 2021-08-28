import './core.css';
import { useState, useEffect } from 'react';
import MovieBox from './movieBox/movieBox';


const Core = (props) => {

    const [displayList, setDisplayList] = useState([]);
    const [films, setFilms] = useState(props.films);
    const [genList, setGenList] = useState(props.genres);
    const [term, setTerm] = useState();


    useEffect(() => {
        setDisplayList(props.display)
        setFilms(props.films)
        setTerm(props.search)
        setGenList(props.genres)
    }, [props])
    



    return (
        <div className = 'core-wrapper'>
            {
                (!term) ? 
                

                Object.entries(genList).map(genre => (
                    <div className = 'display-genre-wrapper'>
                        <h1 className = 'genre-title'>{genre[0]}</h1>
                        <div className = 'genre-list-wrapper'>
                        {
                            genre[1].map(title => (<MovieBox movie = {title} films = {films} />))
                        }
                        </div>
                    </div>
                ))



                :
                <div className = 'display-results-wrapper'>
                    {   displayList.map(item => (<MovieBox movie = {item.title} films = {films} />)) }
                </div>
                 
            }
        </div>
    )
}

export default Core;