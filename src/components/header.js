import './header.css';
import Fuse from 'fuse.js';
import Core from '../components/core';
import YearSort from './yearSort/yearSort';

import { useState, useEffect } from 'react';

const Header = (props) => {


    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const [films, setFilms] = useState(props.films)
    const [genres, setGenres] = useState(props.genres)

    useEffect(() => {
        setFilms(props.films)
        setGenres(props.genres)
    }, [props])


    useEffect(() => {

        const fuse = new Fuse(films, {
            keys: ['title', 'director', 'year', 'writers', 'genre', 'cinematography', 'soundtrack', 'blurb', 'tags', 'trivia', 'review_text', 'review_img', 'special_category'],
            includeScore: true, threshold: 0.2, ignoreLocation: true
        })

        const filtered = fuse.search(searchTerm).map(({item}) => item)
        setResults(filtered)

    }, [searchTerm])

    const handleSort = (sort) => {
        console.log(sort)
    }

    return (
        <div className = 'header-wrapper'>

                <h1 className = 'header-title'>VISHAL'S PRETENTIOUS FILM BLOG</h1>

                <p className = 'intro-text'>Howdy friends !<br />
                    I welcome you to my personal film blog - created entirely from scratch using MongoDB for the database, NODE.JS for the (local) server,
                    Express.js for back-end middleware, and React for the front end / UI<br/><br />
                    Additionally, I manually screencapped and photoshopped each thumbnail image - so be impressed of my all-round front-end/UX expertise 😁
                </p>

                <div className = 'search-wrapper'>
                    <input type = 'text' className = 'search-box' onChange = {(e) => setSearchTerm(e.target.value)} />
                    <input type = 'button' className = 'sort-btn' value = 'year' onClick  = {(e) => handleSort(e.target.value)} />
                </div>


            <Core display = {results} films = {films} search = {searchTerm} genres = {genres} />

        </div>
    )
}

export default Header;