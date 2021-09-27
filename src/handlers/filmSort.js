import { useState, useEffect } from 'react';

import Home from '../pages/home';

const FilmSort = () => {

    const [films, setFilms] = useState([]);
    const [genres, setGenres] = useState([]);
    const [alpha, setAlpha] = useState({});
    const [years, setYears] = useState({});
    
    /* GENRE SORTING HOOKS AND ARRAYS */

    const [war, setWar] = useState([])
    const [horror, setHorror] = useState([])
    const [drama, setDrama] = useState([])
    const [thriller, setThriller] = useState([])
    const [scifi, setScifi] = useState([])
    const [forLang, setForLang] = useState([])
    const [comedy, setComedy] = useState([])
    const [epic, setEpic] = useState([])
    const [crime, setCrime] = useState([])
    const [animated, setAnimated] = useState([])
    const [art, setArt] = useState([])
    const [biography, setBiography] = useState([])
    const [neoNoir, setNeoNoir] = useState([])
    const [mystery, setMystery] = useState([])
    const [romance, setRomance] = useState([])
    const [action, setAction] = useState([])
    const [adventure, setAdventure] = useState([])
    const [silent, setSilent] = useState([])
    const [wholesome, setWholesome] = useState([])
    const [surreal, setSurreal] = useState([])

    let warList = [];
    let horrorList = [];
    let dramaList = []
    let thrillerList = []
    let scifiList = []
    let forLangList = []
    let comedyList = []
    let epicList = []
    let crimeList = []
    let animatedList = []
    let artList = []
    let neoNoirList = []
    let mysteryList = []
    let romanceList = []
    let actionList = []
    let adventureList = []
    let bioList = []
    let silentList = []
    let wholesomeList = []
    let surrealList = []

    const [top, setTop] = useState([])
    const [denSco, setDenSco] = useState([])

    let topList = []
    let deniroScorsese = []

    /* ALPHABET SORTING HOOKS AND ARRAYS */

    const [a, setA] = useState([])
    const [b, setB] = useState([])
    const [c, setC] = useState([])
    const [d, setD] = useState([])
    const [e, setE] = useState([])
    const [f, setF] = useState([])
    const [g, setG] = useState([])
    const [h, setH] = useState([])
    const [i, setI] = useState([])
    const [j, setJ] = useState([])
    const [k, setK] = useState([])
    const [l, setL] = useState([])
    const [m, setM] = useState([])
    const [n, setN] = useState([])
    const [o, setO] = useState([])
    const [p, setP] = useState([])
    const [q, setQ] = useState([])
    const [r, setR] = useState([])
    const [s, setS] = useState([])
    const [t, setT] = useState([])
    const [u, setU] = useState([])
    const [v, setV] = useState([])
    const [w, setW] = useState([])
    const [x, setX] = useState([])
    const [y, setY] = useState([])
    const [z, setZ] = useState([])

    let aList = [];
    let bList = [];
    let cList = [];
    let dList = [];
    let eList = [];
    let fList = [];
    let gList = [];
    let hList = [];
    let iList = [];
    let jList = [];
    let kList = [];
    let lList = [];
    let mList = [];
    let nList = [];
    let oList = [];
    let pList = [];
    let qList = [];
    let rList = [];
    let sList = [];
    let tList = [];
    let uList = [];
    let vList = [];
    let wList = [];
    let xList = [];
    let yList = [];
    let zList = [];

    /* YEAR SORTING HOOKS AND ARRAYS */

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

        fetch('http://localhost:4000/films')
        .then (response => response.json())
        .then (json => setFilms(json))
        .catch (err => console.log(err))

        /* SORTING METHODS - GENRES, CATEGORIES, ALPHABET & YEAR */

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
            } if (item === 'Biographical') {
                bioList.push(film.title)
            } if (item === 'Silent') {
                silentList.push(film.title)
            } if (item === 'Wholesome') {
                wholesomeList.push(film.title)
            } if (item === 'Surreal') {
                surrealList.push(film.title)
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

        films.forEach(film => 
            { if (film.title[0] == 'A') {
                aList.push(film.title)
            } if (film.title[0] == 'B') {
                bList.push(film.title)
            } if (film.title[0] == 'C') {
                cList.push(film.title)
            } if (film.title[0] == 'D') {
                dList.push(film.title)
            } if (film.title[0] == 'E') {
                eList.push(film.title)
            } if (film.title[0] == 'F') {
                fList.push(film.title)
            } if (film.title[0] == 'G') {
                gList.push(film.title)
            } if (film.title[0] == 'H') {
                hList.push(film.title)
            } if (film.title[0] == 'I') {
                iList.push(film.title)
            } if (film.title[0] == 'J') {
                jList.push(film.title)
            } if (film.title[0] == 'K') {
                kList.push(film.title)
            } if (film.title[0] == 'L') {
                lList.push(film.title)
            } if (film.title[0] == 'M') {
                mList.push(film.title)
            } if (film.title[0] == 'N') {
                nList.push(film.title)
            } if (film.title[0] == 'O') {
                oList.push(film.title)
            } if (film.title[0] == 'P') {
                pList.push(film.title)
            } if (film.title[0] == 'Q') {
                qList.push(film.title)
            } if (film.title[0] == 'R') {
                rList.push(film.title)
            } if (film.title[0] == 'S') {
                sList.push(film.title)
            } if (film.title[0] == 'T') {
                tList.push(film.title)
            } if (film.title[0] == 'U') {
                uList.push(film.title)
            } if (film.title[0] == 'V') {
                vList.push(film.title)
            } if (film.title[0] == 'W') {
                wList.push(film.title)
            } if (film.title[0] == 'X') {
                xList.push(film.title)
            } if (film.title[0] == 'Y') {
                yList.push(film.title)
            } if (film.title[0] == 'Z') {
                zList.push(film.title)
            }
        })

        /* HOOK SETTING FOR GENRES (& CATEGORIES), ALPHABET AND YEAR */

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
        setArt(artList)
        setNeoNoir(neoNoirList)
        setMystery(mysteryList)
        setBiography(bioList)
        setRomance(romanceList)
        setAction(actionList)
        setAdventure(adventureList)
        setSilent(silentList)
        setWholesome(wholesomeList)
        setSurreal(surrealList)

        setA(aList)
        setB(bList)
        setC(cList)
        setD(dList)
        setE(eList)
        setF(fList)
        setG(gList)
        setH(hList)
        setI(iList)
        setJ(jList)
        setK(kList)
        setL(lList)
        setM(mList)
        setN(nList)
        setO(oList)
        setP(pList)
        setQ(qList)
        setR(rList)
        setS(sList)
        setT(tList)
        setU(uList)
        setV(vList)
        setW(wList)
        setX(xList)
        setY(yList)
        setZ(zList)

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

        /* EXPORT OBJECT CREATION */
        
        let genObject = {
            "TOP 5": top,
            "DE NIRO-SCORSESE CONNECTION": denSco,
            "Drama": drama,
            "Foreign Language (for me)": forLang,
            "Comedy": comedy,
            "Thriller": thriller,
            "Crime": crime,
            "Epic": epic,
            "Science Fiction": scifi,
            "War": war,
            "Action": action,
            "Biographical": biography,
            "Neo-Noir": neoNoir,
            "Mystery": mystery,
            "Surreal": surreal,
            "Animated": animated,
            "Romance": romance,
            "Adventure": adventure,
            "Horror": horror,
            "Art": art,
            "Silent": silent,
            "Wholesome": wholesome
        }

        let alphaObject = {
            "A": a,
            "B": b,
            "C": c,
            "D": d,
            "E": e,
            "F": f,
            "G": g,
            "I": i,
            "L": l,
            "M": m,
            "N": n,
            "O": o,
            "P": p,
            "R": r,
            "S": s,
            "T": t,
            "U": u,
            "Z": z,
        }

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

        setGenres(genObject)
        setAlpha(alphaObject)
        setYears(yearObject)

    }, [films])

    return (
        <>
            <Home films = {films} genres = {genres} alphaSort = {alpha} years = {years} />
        </>
    )

}

export default FilmSort;