import { useState, useEffect } from 'react';

import Home from '../../pages/home';

const YearSort = (props) => {

    const [films, setFilms] = useState({});
    const [genres, setGenres] = useState({});
    const [alpha, setAlpha] = useState({});
    const [years, setYears] = useState({});

    const [twenties, setTwenties] = useState([]);
    const [thirties, setThirties] = useState([]);
    const [fourties, setFourties] = useState([]);
    const [fifties, setFifties] = useState([]);
    const [sixties, setSixties] = useState([]);
    const [seventies, setSeventies] = useState([]);
    const [eighties, setEighties] = useState([]);
    const [nineties, setNineties] = useState([]);
    const [thousands, setThousands] = useState([]);
    const [tens, setTens] = useState([]);

    let twentyList = [];
    let thirtyList = [];
    let fourtyList = []
    let fiftyList = [];
    let sixtyList = [];
    let seventyList = [];
    let eightyList = [];
    let ninetyList = [];
    let thousandList = [];
    let tenList = [];

    useEffect(() => {
        setFilms(props.films)
        setGenres(props.genres)
        setAlpha(props.alphaSort)
        
        films.forEach(film => {
            if (film.year >= 1920 && film.year <= 1929) {
                twentyList.push(film.title)
            } if (film.year >= 1930 && film.year <= 1939) {
                thirtyList.push(film.title)
            } if (film.year >= 1940 && film.year <= 1949) {
                fourtyList.push(film.title)
            } if (film.year >= 1950 && film.year <= 1959) {
                fiftyList.push(film.title)
            } if (film.year >= 1960 && film.year <= 1969) {
                sixtyList.push(film.title)
            } if (film.year >= 1970 && film.year <= 1979) {
                seventyList.push(film.title)
            } if (film.year >= 1980 && film.year <= 1989) {
                eightyList.push(film.title)
            } if (film.year >= 1990 && film.year <= 1999) {
                ninetyList.push(film.title)
            } if (film.year >= 2000 && film.year <= 2009) {
                thousandList.push(film.title)
            } if (film.year >= 2010 && film.year <= 2019) {
                tenList.push(film.title)
            }
        })

        setTwenties(twentyList)
        setThirties(thirtyList)
        setFourties(fourtyList)
        setFifties(fiftyList)
        setSixties(sixtyList)
        setSeventies(seventyList)
        setEighties(eightyList)
        setNineties(ninetyList)
        setThousands(thousandList)
        setTens(tenList)

        let yearObject = {
            "1920s": twenties,
            "1940s": fourties,
            "1950s": fifties,
            "1960s": sixties,
            "1970s": seventies,
            "1980s": eighties,
            "1990s": nineties,
            "2000s": thousands,
            "2010s": tens
        }

        setYears(yearObject)

    }, [films])






    return (
        <>
            <Home genres = {genres} films = {films} alphaSort = {alpha} years = {years} />
        </>
    )
}

export default YearSort;