const AppError = require("../utils/appError");
const conn = require("../services/db");


exports.getAllLogins = (req, res, next) => {
    console.log(req.params)
    conn.query("SELECT * FROM login", function (err, data, fields) {
        if(err) return next(new AppError(err))
        /*res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });*/
        res.send(data)
    });
};



 exports.createLogin = (req, res, next) => {
    console.log(req.body)
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.username, req.body.password];
    conn.query(
        "INSERT INTO login (username, password) VALUES(?)",
        [values],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "todo created!",
            });
        }
    );
};

exports.getLogin = (req, res, next) => {
    if (!req.params.username) {
        return next(new AppError("No todo id found", 404));
    }
    conn.query(
        "SELECT id, username FROM login WHERE username = ? AND password = ?",
        [req.params.username, req.params.password],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            /*res.status(200).json({
                status: "success",
                length: data?.length,
                data: data,

            });*/
            res.send(data)
        }
    );
};

exports.getId = (req, res, next) => {
    console.log(req.params.username)
    if (!req.params.username) {
        return next(new AppError("No todo id found", 404));
    }
    conn.query(
        "SELECT * FROM login WHERE username = ?",
        [req.params.username],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            /*res.status(200).json({
                status: "success",
                length: data?.length,
                data: data
            });*/
            res.send(data)
        }
    );
};

exports.createMessage = (req, res, next) => {
    console.log(req.body)
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.mess, req.body.user_id];
    conn.query(
        "INSERT INTO messages (text, user_id) VALUES(?)",
        [values],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "todo created!",
            });
        }
    );
};

exports.getMessages = (req, res, next) => {
    console.log(req.params)
    conn.query(
        "SELECT text FROM messages where user_id = ?",
        [req.params.user_id],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            /*res.status(200).json({
                status: "success",
                length: data?.length,
                data: data,
            });*/
            res.send(data)
        }
    );
};

exports.getAllMessages = (req, res, next) => {
    console.log(req.params)
    conn.query("SELECT * FROM messages", function (err, data, fields) {
        if(err) return next(new AppError(err))
        /*res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });*/
        res.send(data)
    });
};


exports.deleteMessage = (req, res, next) => {
    console.log(req.params)
    conn.query(
        "DELETE FROM messages WHERE text = ? LIMIT 1",
        [req.params.user_id],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "Message was deleted successfully"
            });
        }
    );
};

exports.deleteUser = (req, res, next) => {
    console.log(req.params)
    conn.query(
        "DELETE FROM login WHERE username = ?",
        [req.params.username],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "User was deleted successfully"
            });
        }
    );
};