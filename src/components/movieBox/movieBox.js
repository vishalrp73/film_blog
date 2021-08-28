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
    const [paragraph, setParagraph] = useState([])

    useEffect(() => {
        setMovie(props.movie);
        setFilmList(props.films);

        filmList.forEach(film => {
            if (film.title == movie) {
                setFilm(film);
            }
        })

    }, [props])

    
    const handleOpen = (film) => {
        setOpen(true);
        let num = Math.floor(Math.random() * film.img_bank.length - 0)
        let trivNum = Math.floor(Math.random() * film.trivia.length - 0)
        setRand(film.img_bank[num])
        setTrivia(film.trivia[trivNum])
        setParagraph(film.review_text.split('\n'))

    }

    const handleClose = () => {
        setOpen(false);
    }

    const renderInterior = (id) => {
        let x = document.getElementsByClassName(id)
        console.log(x[0])
    }

    const cancelInterior = (id) => {
        let x = document.getElementsByClassName(id)
        console.log(x[0])
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
                    
                    <div className = 'iframe-container'>
                        <iframe src = {film.trailer + `?&amp;rel=0&amp;autoplay=1&amp;controls=1&amp;modestbranding=1&amp;iv_load_policy=3`}
                        allowFullScreen = 'true' title = 'video' frameborder = '0' className = 'trailer-wrapper' allow = 'autoplay; encrypted-media' />
                    </div>

                    <h1 className = 'title-text'>{film.title}</h1>
                    <h2>Directed by: {film.director}</h2>
                    <h3>{film.year}</h3>
                    <p>Runtime: {} | Genres: {} | Special Category: {}</p>
                    <p>Writer(s): {film.writers}</p>
                    <p>Cinematography: {film.cinematography} | Soundtrack: {film.soundtrack}</p>
                    <p>{film.notable_actors}</p>

                    <p>{film.blurb}</p>

                    <p>{trivia}</p>

                    <h4>{film.review_img}</h4>
                    {
                        paragraph.map(text => (
                            <>
                            <p>{text}</p>
                            </>
                        ))
                    }
                    
                </div>
            </Modal>
        </div>
    )
}

export default MovieBox;