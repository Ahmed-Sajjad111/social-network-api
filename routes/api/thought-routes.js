const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

//  /api/thoughts
router
    .route('/')
    .get(getAllThoughts);

//  /api/thoughts/userId
router
    .route('/:userId')
    .post(createThought);

//  /api/thoughts/:thoughtId
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

//  /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(postReaction);

//  /api/thoughts/:thoughtId/reactions/reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router