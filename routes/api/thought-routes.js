const router = require('express').Router();
const { addThought,
        removeThought,
        getAllThought,
        getThoughtById,
        updateThought     
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(addThought);

// /api/thoughts/
router 
    .route('/:userId/:thoughtId')
    .delete(removeThought);

module.exports = router;