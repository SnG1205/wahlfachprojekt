const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/").get(controllers.getAllLogins).post(controllers.createLogin);
router
    .route("/messages")
    .post(controllers.createMessage)
    .get(controllers.getAllMessages)
router
    .route("/messages/:user_id")
    .get(controllers.getMessages)
    .delete(controllers.deleteMessage)
router
    .route("/:username")
    .get(controllers.getId)
    .delete(controllers.deleteUser)
router
    .route("/:username/:password")
    .get(controllers.getLogin)

module.exports = router;