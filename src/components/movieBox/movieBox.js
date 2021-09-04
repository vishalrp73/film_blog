import './movieBox.css';
import { useState, useEffect } from 'react';

import Modal from '@material-ui/core/Modal';

const MovieBox = (props) => {

    const [movie, setMovie] = useState(props.movie);
    const [film, setFilm] = useState({});
    const [filmList, setFilmList] = useState(props.films);
    const [open, setOpen] = useState(false);
    const [rand, setRand] = useState('');
    const [trivia, setTrivia] = useState('');
    const [paragraph, setParagraph] = useState([]);
    const [genres, setGenres] = useState([]);
    const [actors, setActors] = useState([]);
    const [writers, setWriters] = useState([]);
    const [cinemat, setCinemat] = useState([]);
    const [soundt, setSoundt] = useState([]);
    const [specCat, setSpecCat] = useState([]);


    useEffect(() => {
        setMovie(props.movie);
        setFilmList(props.films);

        filmList.forEach(film => {
            if (film.title == movie) {
                setFilm(film);
            }
        })

    }, [props])

    useEffect(() => {

    }, [film])

    
    const handleOpen = (film) => {
        setOpen(true);
        let num = Math.floor(Math.random() * film.img_bank.length - 0)
        let trivNum = Math.floor(Math.random() * film.trivia.length - 0)
        setRand(film.img_bank[num])
        setTrivia(film.trivia[trivNum])
        setParagraph(film.review_text.split('\n'))
        setGenres(film.genre)
        setActors(film.notable_actors)
        setWriters(film.writers)
        setCinemat(film.cinematography)
        setSoundt(film.soundtrack)
        setSpecCat(film.special_category)
    }

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <div className = 'entire-box-wrapper'>
            
            <div className = 'movie-box-wrapper'  onClick = {() => handleOpen(film) }
                style = {{backgroundImage: `url(${film.thumbnail})`}} >
                    
                    <div className = {film._id} id = 'info-box-wrapper'>
                        <h1>{film.title}</h1>
                        <h2>{film.director}</h2>
                        <h3>{film.year}</h3>
                    </div>

            </div>
            
            

        
            <Modal className = 'mui-modal' open = {open} onClose = {() => handleClose()} style = {{backgroundImage: `url(${rand})`}} >
                <div className = 'modal-wrapper'>

                    <h1 className = 'close-modal' onClick = {() => handleClose() }>X</h1>
                    
                    <div className = 'iframe-container'>
                        <iframe src = {film.trailer + `?&amp;rel=0&amp;autoplay=1&amp;controls=1&amp;modestbranding=1&amp;iv_load_policy=3`}
                        allowFullScreen = 'true' title = 'video' frameborder = '0' className = 'trailer-wrapper' allow = 'autoplay; encrypted-media' />
                    </div>

                

                    <div className = 'title-wrapper' >
                        <h1 className = 'title-text'>{film.title}</h1>
                        <h2 className = 'director-text'>Directed by: {film.director}</h2>
                        <h3 className = 'year-text'>{film.year}</h3>
                    </div>
                    
                    <div className = 'detail-wrapper'>
                        <p className = 'middle-bar-text'>Runtime: {film.runtime} || Genre(s): {genres.map(item => (<>{item}, </>))}</p>
                        <p className = 'trivia-text'><span id = 'color-trivia'>RANDOM TRIVIA:</span><br/>{trivia}</p>

                        <div className = 'actor-wrapper'>
                            <p className = 'notable_act-text'>NOTABLE ACTORS:</p>
                            {
                                actors.map(actor => (
                                    <>
                                        <p className = 'actor-text'>{ actor }</p>
                                    </>
                                ))
                            }
                        </div>

                        <p className = 'crew-text'>Writers(s): {writers.map(writer => (<>{writer}, </>))} <br /> Cinematography: {cinemat.map(artist => (<>{artist}, </>))} <br /> Soundtrack: {soundt.map(artist => (<>{artist}, </>))}</p>

                        <p className = 'special_cat-text'>CATEGORIES: {specCat.map(cat => (<>{cat}, </>))}</p>

                        <p className = 'blurb-text'>{film.blurb}</p>
                    </div>
                    

                    <h4 className = 'review-img-text'>{film.review_img}</h4>

                    <div className = 'review-wrapper'>
                    {
                        paragraph.map(text => (
                            <>
                            <p className = 'review-para-text'>{text}</p>
                            </>
                        ))
                    }
                    </div>
                    
                </div>
            </Modal>
        </div>
    )
}

export default MovieBox;