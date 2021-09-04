import './core.css';
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


    useEffect(() => {
        setDisplayList(props.display)
        setFilms(props.films)
        setTerm(props.search)
        setGenList(props.genres)
        setAlphaList(props.alphaSort)
        setSort(props.sort)
        setYears(props.years)

    }, [props])

    console.log(films)



    return (
        <div className = 'core-wrapper'>
            {
                (!term) ? 

                            (!sort) ? 
                

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
                                    
                                    : (sort == 1) ?
                                    
                                                Object.entries(alphaList).map(letter => (
                                                    <div className = 'display-genre-wrapper'>
                                                        <h1 className = 'genre-title'>{letter[0]}</h1>
                                                        <div className = 'genre-list-wrapper'>
                                                            {   
                                                                letter[1].map(title => (<MovieBox movie = {title} films = {films} />))
                                                            }
                                                        </div>
                                                    </div>
                                                )) : (sort == 2) ?

                                                        Object.entries(years).map(decade => (
                                                            <div className = 'display-genre-wrapper'>
                                                                <h1 className = 'genre-title'>{decade[0]}</h1>
                                                                <div className = 'genre-list-wrapper'>
                                                                    {
                                                                        decade[1].map(title => (<MovieBox movie = {title} films = {films} />))
                                                                    }
                                                                </div>
                                                            </div>
                                                        ))
                                                        
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