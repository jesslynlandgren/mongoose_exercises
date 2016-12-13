const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost/mongoose_languages');

// const Language = mongoose.model('Language', {
//     name: String,
//     website: String,
//     date_first_appeared: Date,
//     paradigms: [String],
//     typing_discipline: [String],
//     inventors: [{
//         name: String,
//         website: String}],
//     date_current_release: Date,
//     influenced_by: [String],
//     test: Number
// });
//
// var python = new Language({
//     name: 'Python_TEST2',
//     website: 'www.python.org',
//     date_first_appeared: new Date('1991-02-20'),
//     paradigms: ['object-oriented', 'imperative', 'functional', 'procedural', 'reflective'],
//     typing_discipline: ['duck', 'dynamic', 'strong', 'gradual'],
//     inventors: [{name: 'Guido van Rossum', website: 'https://gvanrossum.github.io/'}],
//     date_current_release: new Date('2016-06-27'),
//     influenced_by: ['ABC', 'C', 'C++', 'Haskell'],
//     test: 1
// });

// var javascript = new Lang


// python.save(function(err) {
//     if (err) {
//         console.log('It didn\'t work: ' + err.message);
//     } else {
//         console.log('It worked.');
//     }
// });

// var javascript = new Language();
// javascript.name = 'JavaScript';
// javascript.website = 'https://www.javascript.com/';
// javascript.date_first_appeared = new Date('1995-05-23');
// javascript.inventors.push({
//     name: 'Brenden Eich',
//     website: 'https://brendaneich.com/'
// });
// javascript.paradigms.push('scripting');
// javascript.paradigms.push('object-oriented (prototype-based)');
// javascript.paradigms.push('imperative');
// javascript.paradigms.push('functional');
// javascript.paradigms.push('event-driven');
// javascript.typing_discipline = ['dynamic', 'duck'];
// javascript.date_current_release = new Date('2016-06-17');
// javascript.influenced_by = ['TypeScript, CoffeeScript', 'Dart'];


// javascript.save()
//     .then(function(result){
//         console.log('Save success:', result);
//     })
//     .catch(function(err){
//         console.log('Didn\'t save because', err.stack)
//     });


//TWO
// Language.find({})
// .then(function(docs){
//     console.log('TWO', docs);
// });

//THREE
// Language.find({
//     name: 'Python'
// })
// .then(function(docs) {
//     console.log('THREE', docs);
// });

//FOUR
// Language.update(
//     {name: 'Python'},
//     {$set: {
//         website: 'ilovepython.com'
//         }
//     }
// ).then(function(docs) {
//     console.log('FOUR', docs);
// });


//FIVE
// Language.find(
//     {name: 'Python'}
// )
// .then(function(docs){
//     console.log(docs[0]._id);
// });


//SIX
// Language.update(
//     {name: 'Python_TEST2'},
//     {$inc:
//         {test: 1}
//     }
// ).then(function(docs){
//     console.log('it worked');
// });

//// Validation
const Language = mongoose.model('Language', {
    name: {
        type: String,
        required: true
    },
    website: String,
    date_first_appeared: {
        type: String,
        required: true
    },
    paradigms: [String],
    typing_discipline: [String],
    inventors: [{
        name: {type: String, required: true},
        website: String}],
    date_current_release: Date,
    influenced_by: [String],
    test: Number
});

var python = new Language({
    name: 'Python_TEST2',
    website: 'www.python.org',
    date_first_appeared: new Date('1991-02-20'),
    paradigms: ['object-oriented', 'imperative', 'functional', 'procedural', 'reflective'],
    typing_discipline: ['duck', 'dynamic', 'strong', 'gradual'],
    inventors: [{name: 'Guido van Rossum', website: 'https://gvanrossum.github.io/'}],
    date_current_release: new Date('2016-06-27'),
    influenced_by: ['ABC', 'C', 'C++', 'Haskell'],
    test: 1
});

python.save(function(err) {
    if (err) {
        console.log('It didn\'t work: ' + err.message);
    } else {
        console.log('It worked.');
    }
});
