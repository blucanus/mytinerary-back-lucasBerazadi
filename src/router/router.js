const express = require('express')
const router = express.Router()
const {getCities, getCity, addCity, deleteCity, updateCity} = require('../controllers/citiesControler')
/* const { verifyDataClient, verifyDataCity } = require('../middlewares/verifications') */
const { addIntPoint, getInterestPoint } = require('../controllers/interestPointController')
const { addItinerary, getIntineraries, getIntineraryForCity, deleteItinerary, updateItinerary } = require('../controllers/itineraryController')

//endpoints cities routes
router.get('/cities', getCities)
router.get('/cities/:id', getCity)
router.post('/cities', addCity)
router.delete('/cities', deleteCity)
router.patch('/cities', updateCity)

router.post('/intPoint', addIntPoint)
router.get('/intPoint', getInterestPoint)

router.post('/itinerary', addItinerary)
router.get('/itinerary', getIntineraries)
router.get('/itinerary/:city_id', getIntineraryForCity)
router.delete('/itinerary', deleteItinerary)
router.patch('/itinerary', updateItinerary)
 
 
module.exports = router