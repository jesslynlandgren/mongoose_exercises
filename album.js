const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost/albums');

const Album = mongoose.model('Album', {
    name: String,
    artist: String,
    released: Date,
    tracks: [{
        name: String,
        songWriters: String,
        duration: Number}],
    personnel: [{
        name: String,
        instrument: String
    }]
});
