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
    const [filmId, setFilmId] = useState();

    const [comment, setComment] = useState('');
    const [commentName, setCommentName] = useState('');
    const [comFilmId, setComFilmId] = useState();
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

            try {
                setFilmId(film.film_id)
            } catch (error) {
                console.log(error)
            }

            setRand(film.img_bank[num])
            setTrivia(film.trivia[trivNum])
            setParagraph(film.review_text.split('\n'))
            setGenres(film.genre)
            setActors(film.notable_actors)
            setWriters(film.writers)
            setCinemat(film.cinematography)
            setSoundt(film.soundtrack)
            setSpecCat(film.special_category)
            setCommentList((film.comments).reverse())
            

        } catch (error) {
            console.log(error)
        }
        console.log(filmId)
       
    }

    const handleClose = () => {
        setOpen(false);
    }

    /* COMMENT FUNCTIONALITY */

    const handleName = (event) => {
        setCommentName(event.target.value)
    }

    const handleComment = (event) => {
        setComment(event.target.value)
        setComFilmId(event.target.id)
    }

    const handlePost = (event) => {
        
        console.log(comFilmId)
        console.log(commentName)
        console.log(comment)

        event.preventDefault();

        const newComment = {
            id: comFilmId,
            name: commentName,
            comText: comment
        }

        axios.post('http://localhost:4000/addComment', newComment)
        document.getElementById('comment-heading-bar').innerHTML = 'COMMENT POSTED! REFRESH TO VIEW'
        setComFilmId();
        setCommentName('');
        setComment('');

    }

    const handleUp = (id, commentId) => {
        console.log('upvote triggered');

        const upvoteObj = {
            film_id: id,
            comment_id: commentId
        }

        axios.put('http://localhost:4000/upvote/' + id, upvoteObj);
        console.log('Upvote sent');
    }

    const handleDown = (id, commentId) => {

        const downvoteObj = {
            film_id: id,
            comment_id: commentId
        }

        axios.put('http://localhost:4000/downvote/' + id, downvoteObj);
        console.log('Downvote sent')

    }

    /* END OF COMMENT FUNCTIONALITY */

    return (

        <div className = 'entire-box-wrapper'>
            
            <div className = 'movie-box-wrapper' id = 'resp_box' onClick = {() => handleOpen(film) }
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
                        <h1 className = 'title-text' id = 'resp_title'>{film.title}</h1>
                        <h1 className = 'close-modal' onClick = {() => handleClose() }>X</h1>
                    </div>
                    
                    <div className = 'iframe-container'>
                        <iframe src = {film.trailer + `?&amp;rel=0&amp;autoplay=1&amp;controls=1&amp;modestbranding=1&amp;iv_load_policy=3`}
                        allowFullScreen = 'true' title = 'video' frameborder = '0' className = 'trailer-wrapper' allow = 'autoplay; encrypted-media' />
                    </div>

                    <div className = 'det-bar-wrapper'>
                        
                        <div className = 'year-wrap'>
                            <h1 className = 'year-text' id = 'resp_year'>{film.year}</h1>
                        </div>

                        <div className = 'director-wrap'>
                            <h1 className = 'director-text' id = 'resp_director'><span className = 'directed-by' id = 'resp_direct-by'>DIRECTED BY:</span>{film.director ? film.director : `director not found :(`}</h1>
                        </div>

                        <div className = 'runtime-wrap'>
                            <h4 className = 'runtime-text' id = 'resp_runtime'>RUNTIME</h4>
                            <h2 id = 'resp_runtime-value' className = 'runtime-value'>{film.runtime}</h2>
                        </div>

                    </div>

                    <div className = 'blurb-wrapper'>
                        <h3 className = 'blurb-title'>BLURB</h3>
                        <p className = 'blurb-text'>{ film.blurb }</p>
                    </div>

                    { /* CREW AND BASIC DETAILS WRAPPER */}

                    <div className = 'details-wrapper' id = 'resp_details'>

                        <div className = 'detail-box' id = 'resp_detail-box'>
                            <h3 className = 'detail-title' id = 'resp_detail-title'>GENRES</h3>
                            <p className = 'detail-entries'>{ genres.map(genre => (<>{genre}<br/></>)) }</p>
                        </div>

                        <div className = 'detail-box' id = 'resp_detail-box'>
                            <h3 className = 'detail-title' id = 'resp_detail-title'>WRITER(S)</h3>
                            <p className = 'detail-entries'>{ writers.map(writer => (<>{writer}<br/></>)) }</p>
                        </div>

                        <div className = 'detail-box' id = 'resp_detail-box'>
                            <h3 className = 'detail-title' id = 'resp_detail-title'>CINEMATOGRAPHY</h3>
                            <p className = 'detail-entries'>{ cinemat.map(artist => (<>{artist}<br/></>)) }</p>
                        </div>

                        <div className = 'detail-box' id = 'resp_detail-box'>
                            <h3 className = 'detail-title' id = 'resp_detail-title'>SOUNDTRACK</h3>
                            <p className = 'detail-entries'>{ soundt.map(artist => (<>{artist}<br/></>))}</p>
                        </div>

                        <div className = 'detail-box' id = 'resp_detail-box'>
                            <h3 className = 'detail-title' id = 'resp_detail-title'>CATEGORIES</h3>
                            <p className = 'detail-entries'>{ specCat.map(category => (<>{ category }<br/></>)) }</p>
                        </div>

                    </div>

                    { /* END OF CREW AND BASIC DETAILS WRAPPER */}

                    <div className = 'actor_score-wrapper' id = 'resp_actor-score'>
                        
                        <div className = 'not_act-wrap' id = 'resp_actor-wrap'>
                            <h3 className = 'not_act-title'>NOTABLE ACTORS</h3>
                            <p className = 'not_act-entries'>{ actors.map(actor => (<>{actor}<br/></>))}</p>
                        </div>

                        <div className = 'review_score-wrap' id = 'resp_score-wrap'>
                            <h1 className = 'review_score-text' id = 'resp_review-score'>{ film.review_score } / 10</h1>
                        </div>

                    </div>

                    <div className = 'trivia-wrapper' id = 'resp_trivia'>
                        <h3 className = 'trivia-title'>RANDOM TRIVIA !</h3>
                        <p className = 'trivia-text'>{ trivia }</p>
                    </div>

                    <div className = 'review-wrapper' id = 'resp_review-wrap'>
                        <h2 className = 'review-headline' id = 'resp_headline'>{ film.headline }</h2>
                        <p className = 'review-text'>
                            {
                                paragraph.map(item => (<p>{item}<br/></p>))
                            }
                        </p>
                    </div>

                    {/* COMMENT FEATURE CODE (TEMPORARILY REMOVED FOR MERGE) */}

                    <div className = 'comment-wrapper'>
                        <h4 className = 'comment-heading' id = 'comment-heading-bar'>What are your thoughts on this movie?</h4>
                        <p className = 'comment-helper-text'>Please don't abuse the comment section, I don't want to have to come down there
                                                        and crack some heads open.</p>

                        <div className = 'comment-input-wrap'>

                            <textarea id = {film._id}
                                        className = 'comment-text-input'
                                        placeholder = 'Enter a comment !'
                                        onChange = { handleComment } />


                            <div className = 'right-bar'>
                                <input
                                    className = 'comment-name-input'
                                    type = 'text'
                                    placeholder = 'name'
                                    onChange = { handleName } />                                
                                
                                <input
                                    className = 'comment-post-btn'
                                    type = 'button'
                                    value = 'POST'
                                    onClick = { handlePost } />
                                
                            </div>

                        </div>

                        <div className = 'comment-list-wrapper'>

                        {
                            commentList.map(comment => (
                                <div className = 'individual-comment-wrap'>

                                    <div className = 'left-portion'>
                                        
                                        <p className = 'com-text'>{comment.comment_text}</p>

                                        { /* UPVOTE + DOWNVOTE FUNCTIONALITY */ }
                                        
                                        <div className = 'vote-bar'>
                                            <p id = 'up-count' className = 'upvote-tally' onClick = { () => handleUp(film._id, comment._id) }>UP: {comment.upvotes} | </p>
                                            <p id = 'down-count' className = 'downvote-tally' onClick = { () => handleDown(film._id, comment._id) }>| DOWN: {comment.downvotes}</p>
                                        </div>

                                    </div>

                                    <div className = 'right-portion'>
                                        <h4 className = 'com-name'>{comment.name}</h4>
                                        <h5 className = 'com-timestamp'>{new Date(comment.timestamp).toLocaleString()}</h5>
                                    </div>



                                </div>
                            ))
                        }



                    </div>

                    </div>

                    
                </div>
            </Modal>
        </div>
    )
}

export default MovieBox;