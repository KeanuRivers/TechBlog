const router = require('express').Router();
// User Routes
const userRoutes = require('./user-routes');
// Post Routes
const postRoutes = require('./post-routes');
// Comment Routes
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// Export the router
module.exports = router;