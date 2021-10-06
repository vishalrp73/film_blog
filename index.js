const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const app = express();
const Int32 = require('mongoose-int32').loadType(mongoose);
const Double = require('@mongoosejs/double');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect(
    'mongodb+srv://vishal:5MY8O1huE47UAqdF@filmreviewcluster0.bz72g.mongodb.net/film-list'
).then (console.log('Database connection successful !'));


const filmSchema = {
    title: String,
    film_id: Int32,
    director: String,
    year: Int32,
    runtime: String,
    genre: Array,
    writers: Array,
    cinematography: Array,
    soundtrack: Array,
    notable_actors: Array,
    blurb: String,
    special_category: Array,
    tags: Array,
    trailer: String,
    trivia: Array,
    review_text: String,
    review_score: Double,
    thumbnail: String,
    img_bank: Array,
    headline: String,
    comments: Array
};

const Film = mongoose.model('Film', filmSchema);

app.get('/films', (req, res) => {

    Film.find()
    .then (films => res.json(films))
    .catch (err => console.log(err));

});

app.post('/addComment', (req, res) => {

    let randNum = Math.random();
    const idGen = randNum * 10000000000000000

    let ts = Date.now();
    let conTS = new Date(ts);
    let filmId = req.body.id;


    const newComment = {
        _id: idGen,
        name: req.body.name,
        comment_text: req.body.comText,
        timestamp: conTS,
        upvotes: 0,
        downvotes: 0
    }

    Film.findByIdAndUpdate(
        {_id: filmId}, {$push: {"comments": newComment}}, {new: true}, function(err, model) {
            console.log(err)
        }
    ).then (res.status(201).send('Comment added'))
    .catch (err => console.log(err));

});


app.put('/upvote/:id', (req, res) => {

    const filmId = req.body.film_id;
    const commentId = req.body.comment_id

    Film.find({_id: filmId})
    .then (film => {
        res.json(film)
        const filmModel = film
        const commentList = filmModel[0].comments;

        for (let i = 0; i < commentList.length; i++) {


            Object.keys(commentList[i]).forEach(key => {

                if (key == '_id') {
                    for (let [key, value] of Object.entries(commentList[i])) {

                        if (key == '_id' && value == commentId) {

                            commentList[i].upvotes++

                            Film.findByIdAndUpdate(
                                {_id: filmId}, { $set: {"comments": commentList}},
                                (req, res, err) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log('Upvote successful');
                                    }
                                }
                            )
                        }
                    }
                }
            })
        }
    })
    .catch (err => console.log(err));

} );

app.put('/downvote/:id', (req, res) => {

    const filmId = req.body.film_id;
    const commentId = req.body.comment_id;

    Film.find({_id: filmId})
    .then (film => {
        res.json(film)
        const filmModel = film
        const commentList = filmModel[0].comments;

        for (let i = 0; i < commentList.length; i++) {

            Object.keys(commentList[i]).forEach(key => {

                if (key == '_id') {

                    for (let [key, value] of Object.entries(commentList[i])) {

                        if (key == '_id' && value == commentId) {

                            commentList[i].downvotes++

                            Film.findByIdAndUpdate(
                                {_id: filmId}, { $set: {"comments": commentList}},
                                (req, res, err) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log('Downvote successful')
                                    }
                                }
                            )
                        }
                    }
                }
            })
        }
    })
    .catch (err => console.log(err));

});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('film-app/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'film-app', 'build', 'index.html'));
    })
}

app.listen(port, () => {console.log('Server running at port', port)});