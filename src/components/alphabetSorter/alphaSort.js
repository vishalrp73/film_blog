import { useState, useEffect } from 'react';

import YearSort from '../yearSorter/yearSort';

const AlphabetSort = (props) => {

    const [films, setFilms] = useState({});
    const [genres, setGenres] = useState({});
    const [alpha, setAlpha] = useState({});

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
    

    useEffect(() => {
        setFilms(props.films)
        setGenres(props.genres)

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

        setAlpha(alphaObject)



    }, [films])





    return (
        <>
            <YearSort genres = {genres} films = {films} alphaSort = {alpha} />
        </>
    )
}
export default AlphabetSort;