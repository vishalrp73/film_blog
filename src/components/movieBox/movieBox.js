import './movieBox.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

    const [comment, setComment] = useState('');
    const [commentId, setCommentId] = useState();
    const [commentName, setCommentName] = useState('');

    const [commentList, setCommentList] = useState([]);


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
        try {
            let num = Math.floor(Math.random() * film.img_bank.length - 0)
            let trivNum = Math.floor(Math.random() * film.trivia.length - 0)
            let order = (film.comment.reverse())
            setRand(film.img_bank[num])
            setTrivia(film.trivia[trivNum])
            setParagraph(film.review_text.split('\n'))
            setGenres(film.genre)
            setActors(film.notable_actors)
            setWriters(film.writers)
            setCinemat(film.cinematography)
            setSoundt(film.soundtrack)
            setSpecCat(film.special_category)
            setCommentList(order)
        } catch (error) {
            console.log(error)
        }
        
       
    }

    const handleClose = () => {
        setOpen(false);
    }

    const commentSetter = (event) => {
        setComment(event.target.value)
        setCommentId(event.target.id)
    }

    const commentNameSetter = (event) => {
        setCommentName(event.target.value)
    }

    const handlePost = () => {
        axios.post ('http://localhost:4000/postComment', {
            addComment: comment,
            id: commentId,
            name: commentName
        })
        .then (response => {
            if (response.status === 200) {
                console.log('Posted comment')
            }
        })
        .catch (() => console.log('Unsuccessful comment post'))

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

                    <div className = 'top-wrap'>
                        <h1 className = 'title-text'>{film.title}</h1>
                        <h1 className = 'close-modal' onClick = {() => handleClose() }>X</h1>
                    </div>

                    <h2>WARNING: MODAL REDESIGN IMMINENT, TEMPORARY TEXT FOR BRANCH PUSH</h2>
                    
                    <div className = 'iframe-container'>
                        <iframe src = {film.trailer + `?&amp;rel=0&amp;autoplay=1&amp;controls=1&amp;modestbranding=1&amp;iv_load_policy=3`}
                        allowFullScreen = 'true' title = 'video' frameborder = '0' className = 'trailer-wrapper' allow = 'autoplay; encrypted-media' />
                    </div>

                

                    <div className = 'title-wrapper' >
                        <h2 className = 'director-text'>Directed by: {film.director}</h2>
                        <h3 className = 'year-text'>{film.year}</h3>
                    </div>

                    <div className = 'comment-wrapper'>
                        
                        <div className = 'comment-input-wrap'>
                            <input type = 'text' className = 'comment-name-input' placeholder = 'name' onChange = {(e) => commentNameSetter(e)} />
                            <input id = {film._id} type = 'text' className = 'comment-input-field' onChange = {(e) => commentSetter(e)} placeholder = 'Enter a comment!' />
                        <input type = 'button' value = 'post' className = 'comment-post-btn' onClick = {handlePost} />
                        </div>

                        <div className = 'comment-list-wrapper'>
                            {
                                commentList.map(comment => (
                                    <div className = 'comment-wrap'>
                                        <p className = 'comment-name'>{comment.user_name}</p>
                                        <p className = 'comment-text'>{comment.comment_text}</p>
                                    </div>
                                ))
                            }
                        </div>

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
                    

                    <h4 className = 'review-img-text'>{film.review_score} / 10</h4>

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