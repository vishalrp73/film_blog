import { useState, useEffect } from 'react';

import Home from '../pages/home';

const GenreSorter = () => {

    const [films, setFilms] = useState([])
    const [genres, setGenres] = useState({})

    const [war, setWar] = useState([]);
    const [horror, setHorror] = useState([]);
    const [drama, setDrama] = useState([]);
    const [thriller, setThriller] = useState([]);
    const [scifi, setScifi] = useState([]);
    const [forLang, setForLang] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [epic, setEpic] = useState([]);
    const [crime, setCrime] = useState([]);
    const [animated, setAnimated] = useState([]);
    const [psych, setPsych] = useState([]);
    const [art, setArt] = useState([]);
    const [neoNoir, setNeoNoir] = useState([]);
    const [mystery, setMystery] = useState([]);
    const [romance, setRomance] = useState([]);
    const [action, setAction] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [fantasy, setFantasy] = useState([]);
    const [samurai, setSamurai] = useState([]);
    const [silent, setSilent] = useState([]);
    const [wholesome, setWholesome] = useState([]);

    const [top, setTop] = useState([]);
    const [denSco, setDenSco] = useState([]);

    let topList = []
    let deniroScorsese = []

    let warList = []
    let horrorList = []
    let dramaList = []
    let thrillerList = []
    let scifiList = []
    let forLangList = []
    let comedyList = []
    let epicList = []
    let crimeList = []
    let animatedList = []
    let psychList = []
    let artList = []
    let neoNoirList = []
    let mysteryList = []
    let romanceList = []
    let actionList = []
    let adventureList = []
    let fantasyList = []
    let samuraiList = []
    let silentList = []
    let wholesomeList = []

    useEffect(() => {
        fetch ('http://localhost:4000/films')
        .then (response => response.json())
        .then (json => setFilms(json))
        .catch (err => console.log(err));

        films.forEach(film => film.genre.forEach(item => {
            if (item === 'War') {
                warList.push(film.title)
            } if (item === 'Horror') {
                horrorList.push(film.title)
            } if (item === 'Drama') {
                dramaList.push(film.title)
            } if (item === 'Thriller') {
                thrillerList.push(film.title)
            } if (item === 'Science Fiction') {
                scifiList.push(film.title)
            } if (item === 'Foreign Language') {
                forLangList.push(film.title)
            } if (item === 'Comedy') {
                comedyList.push(film.title)
            } if (item === 'Epic') {
                epicList.push(film.title)
            } if (item === 'Crime') {
                crimeList.push(film.title)
            } if (item === 'Animated') {
                animatedList.push(film.title)
            } if (item === 'Psychological') {
                psychList.push(film.title)
            } if (item === 'Art') {
                artList.push(film.title)
            } if (item === 'Neo-Noir') {
                neoNoirList.push(film.title)
            } if (item === 'Mystery') {
                mysteryList.push(film.title)
            } if (item === 'Romance') {
                romanceList.push(film.title)
            } if (item === 'Action') {
                actionList.push(film.title)
            } if (item === 'Adventure') {
                adventureList.push(film.title)
            } if (item === 'Fantasy') {
                fantasyList.push(film.title)
            } if (item === 'Samurai') {
                samuraiList.push(film.title)
            } if (item === 'Silent') {
                silentList.push(film.title)
            } if (item === 'Wholesome') {
                wholesomeList.push(film.title)
            }
         }))

        films.forEach(film => film.special_category.forEach(item => {
            if (item == 'TOP 5') {
                topList.push(film.title)
            }
            if (item == 'DE NIRO-SCORSESE CONNECTION') {
                deniroScorsese.push(film.title)
            }
        }))

        setTop(topList)
        setDenSco(deniroScorsese)
        setWar(warList)
        setHorror(horrorList)
        setDrama(dramaList)
        setThriller(thrillerList)
        setScifi(scifiList)
        setForLang(forLangList)
        setComedy(comedyList)
        setEpic(epicList)
        setCrime(crimeList)
        setAnimated(animatedList)
        setPsych(psychList)
        setArt(artList)
        setNeoNoir(neoNoirList)
        setMystery(mysteryList)
        setRomance(romanceList)
        setAction(actionList)
        setAdventure(adventureList)
        setFantasy(fantasyList)
        setSamurai(samuraiList)
        setSilent(silentList)
        setWholesome(wholesomeList)

        let genObject = {
            "TOP 5": top,
            "DE NIRO-SCORSESE CONNECTION": denSco,
            "Drama": drama,
            "Foreign Language": forLang,
            "Comedy": comedy,
            "Thriller": thriller,
            "Crime": crime,
            "Epic": epic,
            "Science Fiction": scifi,
            "War": war,
            "Neo-Noir": neoNoir,
            "Action": action,
            "Mystery": mystery,
            "Psychological Thriller": psych,
            "Animated": animated,
            "Romance": romance,
            "Adventure": adventure,
            "Horror": horror,
            "Art": art,
            "Fantasy": fantasy,
            "Samurai": samurai,
            "Silent": silent,
            "Wholesome": wholesome
        }

        setGenres(genObject)


    }, [films])



    return (
        <>
            <Home genres = {genres} films = {films} />
        </>
    )
}

export default GenreSorter;