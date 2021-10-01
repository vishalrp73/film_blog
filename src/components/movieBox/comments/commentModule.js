import './commentModule.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import upvote_icon from '../../../img/upvote-icon.png';
import downvote_icon from '../../../img/downvote-icon.png';

const CommentModule = (props) => {

    const [film, setFilm] = useState({});
    const [displayError, setDisplayError] = useState(false);
    const [commentName, setCommentName] = useState('');
    const [comment, setComment] = useState('');
    const [comFilmId, setComFilmId] = useState();
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {

        setFilm(props.film)
        setCommentList(props.commentList)

    }, [props])

    const handleName = (event) => {
        setCommentName(event.target.value)
    }

    const handleComment = (event) => {
        setComment(event.target.value)
        setComFilmId(event.target.id)
    }

    const handlePost = (event) => {

        if (commentName != '' && comment != '') {
            
            console.log('both checks passed')

            console.log('Comment Name: ' + commentName)
            console.log('Comment Text:' + comment)

            const newComment = {
                id: comFilmId,
                name: commentName,
                comText: comment
            }
    
            axios.post('http://localhost:4000/addComment', newComment)
            setDisplayError(false);
            document.getElementById('display-text-content').innerHTML = 'COMMENT POSTED! REFRESH MODAL TO VIEW'
            setComFilmId();
            setCommentName();
            setComment();

        } else {
            setDisplayError(true);
            document.getElementById('display-text-content').innerHTML = 'PLEASE DO NOT LEAVE THE * REQUIRED FIELDS EMPTY'
        }


    }

    const handleUp = (id, commentId) => {

        const upvoteObj = {
            film_id: id,
            comment_id: commentId
        }

        axios.put('http://localhost:4000/upvote/' + id, upvoteObj);
        document.getElementById('display-text-content').innerHTML = `Yeah sorry, you're going to have to refresh the modal to view the upvotes,
                                                                    we're still pretty primitive here right now.`
    }

    const handleDown = (id, commentId) => {

        const downvoteObj = {
            film_id: id,
            comment_id: commentId
        }

        axios.put('http://localhost:4000/downvote/' + id, downvoteObj);
        document.getElementById('display-text-content').innerHTML = `Yeah sorry, you're going to have to refresh the modal to view the downvotes,
                                                                    we're still pretty primitive here right now.`

    }

    return (
        <>

                <div className = 'comment-wrapper'>
                        <h4 className = 'comment-heading' id = 'comment-heading-bar'>What are your thoughts on this movie?</h4>

                        <div className = 'comment-input-wrap'>

                            <textarea id = {film._id}
                                        className = 'comment-text-input'
                                        placeholder = '* Enter a comment !'
                                        onChange = { handleComment } />


                            <div className = 'right-bar'>
                                <input
                                    className = 'comment-name-input'
                                    type = 'text'
                                    placeholder = '* name'
                                    onChange = { handleName } />                                
                                
                                <input
                                    className = 'comment-post-btn'
                                    type = 'button'
                                    value = 'POST'
                                    onClick = { handlePost } />
                                
                            </div>

                        </div>

                        <div className = 'display-wrapper'>
                            <p className = 'display-text' id = 'display-text-content'
                                style = {
                                    displayError ? {color: 'red'} : {color: 'lightgreen'}
                                }
                                >
                                Please don't abuse the comment section, I really don't want to have to come down there and start deleting comments,
                                I'm just too lazy
                            </p>
                        </div>

                        <div className = 'comment-list-wrapper'>

                        {
                            commentList.map(comment => (
                                <div className = 'individual-comment-wrap'>

                                    <div className = 'left-portion'>
                                        
                                        <p className = 'com-text' id = 'resp_com-text'>{comment.comment_text}</p>

                                        { /* UPVOTE + DOWNVOTE FUNCTIONALITY */ }
                                        
                                        <div className = 'vote-bar' id = 'resp_vote-bar'>

                                            <div className = 'vote-container' id = 'upvote-container'>
                                                <img src = { upvote_icon } className = 'vote-img' id = 'upvote-img' onClick = { () => handleUp( film._id, comment._id ) } />
                                                <p className = 'tally' id = 'upvote-tally'>{comment.upvotes}</p>
                                            </div>

                                            <div className = 'vote-container' id = 'downvote-container'>
                                                <img src = { downvote_icon } className = 'vote-img' id = 'downvote-img' onClick = {() => handleDown( film._id, comment._id ) } />
                                                <p className = 'tally' id = 'downvote-tally'>{comment.downvotes}</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className = 'right-portion'>
                                        <h4 className = 'com-name' id = 'resp_com-name'>{comment.name}</h4>
                                        <h5 className = 'com-timestamp' id = 'resp_com-time'>{new Date(comment.timestamp).toLocaleString()}</h5>
                                    </div>



                                </div>
                            ))
                        }



                    </div>

                    </div>





        </>
    )


}

export default CommentModule;