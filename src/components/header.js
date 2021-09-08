import './header.css';
import Fuse from 'fuse.js';
import Core from '../components/core';


import { useState, useEffect } from 'react';

const Header = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const [films, setFilms] = useState(props.films)
    const [genres, setGenres] = useState(props.genres)
    const [years, setYears] = useState(props.years)
    const [num, setNum] = useState(0);
    const [alpha, setAlpha] = useState({})
    const [sort, setSort] = useState(false)
    const [randNum, setRandNum] = useState(0);
    const [placeFilm, setPlaceFilm] = useState('');

    const backImgList = [
        "https://film-img.s3.ap-southeast-2.amazonaws.com/slides/apoc-8.png", "https://film-img.s3.ap-southeast-2.amazonaws.com/slides/julia-fox.jpg"
    ]

    useEffect(() => {
        setFilms(props.films)
        setGenres(props.genres)
        setAlpha(props.alphaSort)
        setYears(props.years)
        setPlaceFilm(films[randNum])

    }, [props])

    useEffect(() => {
        let randomNum = Math.floor(Math.random() * backImgList.length - 0)
        setNum(randomNum)

        let filmNum = Math.floor(Math.random() * 50 - 0)
        setRandNum(filmNum)

    }, [])


    useEffect(() => {

        const fuse = new Fuse(films, {
            keys: ['title', 'director', 'year', 'writers', 'genre', 'cinematography', 'soundtrack', 'blurb', 'tags', 'trivia', 'review_text', 'review_img', 'special_category'],
            includeScore: true, threshold: 0.2, ignoreLocation: true
        })

        const filtered = fuse.search(searchTerm).map(({item}) => item)
        setResults(filtered)

    }, [searchTerm])

    const handleAlphaSort = () => {
        setSort(1)
    }

    const handleYearSort = () => {
        setSort(2)
    }

    const handleReset = () => {
        setSort(false)
    }

    const handleRandom = () => {
        setSort(3)
    }

    return (
        <div className = 'header-wrapper'  >
            
            <div className = 'title-wrap' style={{backgroundImage: `url(${backImgList[num]})` }} >
                <h1 className = 'header-title'>VISHAL'S PRETENTIOUS FILM BLOG</h1>

                <p className = 'intro-text'>Howdy friends !<br />
                    I welcome you to my personal film blog - created entirely from scratch using MongoDB for the database, NODE.JS for the (local) server,
                    Express.js for back-end middleware, and React for the front end / UI<br/><br />
                    Additionally, I manually screencapped and photoshopped each thumbnail image - so be impressed of my all-round front-end/UX expertise 😁
                </p>

                <div className = 'search-wrapper'>
                    <input type = 'button' className = 'sort-btn' value = 'reset' onClick = {() => handleReset()} />
                    <input type = 'text' className = 'search-box' onChange = {(e) => setSearchTerm(e.target.value)} placeholder = {`Search for a title...`} />
                    <input type = 'button' className = 'sort-btn' value = 'a-z' onClick  = {() => handleAlphaSort()} />
                    <input type = 'button' className = 'sort-btn' value = 'year' onClick = {() => handleYearSort()} />
                    <input type = 'button' className = 'sort-btn' id = 'feeling-stupid' value = "I'M FEELING STUPID" onClick = {() => handleRandom()} />
                </div>
            </div>


            <Core display = {results} films = {films} search = {searchTerm} genres = {genres} alphaSort = {alpha} sort = {sort} years = {years} />

        </div>
    )
}

export default Header;