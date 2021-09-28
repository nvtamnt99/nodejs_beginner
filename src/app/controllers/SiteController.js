const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    //[GET] /
    index(req, res, next) {

        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         res.status(400).json({err: 'ERROR!!'});
        //     }
        // });

        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);

        // res.render('home');
    }

    //[GET] /
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
