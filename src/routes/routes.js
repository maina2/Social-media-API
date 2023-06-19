import config from '../db/config.js'

import {retrieveUser,retrievePost,retrieveComment} from '../controllers/Usercontrollers.js'

import {createUser,createPost,createComment} from '../controllers/Usercontrollers.js'

import {deleteUser,deletePost,deleteComment} from '../controllers/Usercontrollers.js'

const routes=(app)=>{

    app.route("/Users/:user_id")
        // USERS
        .get(retrieveUser)
        .post(createUser)
        .put()
        .delete(deleteUser)


        // POSTS
    app.route("/Posts/:post_id")
        .get(retrievePost)
        .post(createPost)
        .put()
        .delete(deletePost)
    app.route("/Comments/:comment_id")
        .get(retrieveComment)
        .post(createComment)
        .put()
        .delete(deleteComment)   




}

export default routes;