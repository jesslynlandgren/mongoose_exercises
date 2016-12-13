const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost/mongoose_languages');

const Language = mongoose.model('Language', {
    name: String,
    website: String,
    date_first_appeared: Date,
    paradigms: [String],
    typing_discipline: [String],
    inventors: [{
        name: String,
        website: String}],
    date_current_release: Date,
    influenced_by: [String]
});

var python = new Language({
    name: 'Python',
    website: 'www.python.org',
    date_first_appeared: new Date('1991-02-20'),
    paradigms: ['object-oriented', 'imperative', 'functional', 'procedural', 'reflective'],
    typing_discipline: ['duck', 'dynamic', 'strong', 'gradual']
});

// var javascript = new Lang


python.save(function(err) {
    if (err) {
        console.log('It didn\'t work: ' + err.message);
    } else {
        console.log('It worked.');
    }
});
