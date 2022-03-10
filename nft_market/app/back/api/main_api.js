const express = require("express");
const app = express();
// const db = require("./database.js")
//const md5 = require("md5");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let HTTP_PORT = 3000;

const router_contract_nft = require('./nft_api');
const router_marker_initialization = require('./market_initialization');
const router_marker_execute = require('./market_execute');
const router_marker_query = require('./market_query');

app.use('/contract_nft', router_contract_nft);
app.use('/contract_market/initialization', router_marker_initialization);
app.use('/contract_market/execute', router_marker_execute);
app.use('/contract_market/query', router_marker_query);

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

// app.get("/nft/all", (req, res, next) => {
//     res.json({
//         "message": "success",
//         "data": "GET /nft/all"
//     })
//     // var sql = "select * from user"
//     // var params = []
//     // db.all(sql, params, (err, rows) => {
//     //     if (err) {
//     //         res.status(400).json({"error":err.message});
//     //         return;
//     //     }
//     //     res.json({
//     //         "message":"success",
//     //         "data":rows
//     //     })
//     // });
// });
//
//
// app.get("/nft/:id", (req, res, next) => {
//     res.json({
//         "message": "success",
//         "data": "GET /nft/:id"
//     })
//
//     // var sql = "select * from user where id = ?"
//     // var params = [req.params.id]
//     // db.get(sql, params, (err, row) => {
//     //     if (err) {
//     //         res.status(400).json({"error": err.message});
//     //         return;
//     //     }
//     //     res.json({
//     //         "message": "success",
//     //         "data": row
//     //     })
//     // });
// });
//
//
// app.post("/nft/addNew", (req, res, next) => {
//     res.json({
//         "message": "success",
//         "data": req.body,
//         "id": "new nft"
//     })
//
//     // var errors = []
//     // if (!req.body.password) {
//     //     errors.push("No password specified");
//     // }
//     // if (!req.body.email) {
//     //     errors.push("No email specified");
//     // }
//     // if (errors.length) {
//     //     res.status(400).json({"error": errors.join(",")});
//     //     return;
//     // }
//     // var data = {
//     //     name: req.body.name,
//     //     email: req.body.email,
//     //     password: md5(req.body.password)
//     // }
//     // var sql = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
//     // var params = [data.name, data.email, data.password]
//     // db.run(sql, params, function (err, result) {
//     //     if (err) {
//     //         res.status(400).json({"error": err.message})
//     //         return;
//     //     }
//     //     res.json({
//     //         "message": "success",
//     //         "data": data,
//     //         "id": this.lastID
//     //     })
//     // });
// });
//
//
// // app.patch("/api/user/:id", (req, res, next) => {
// //     var data = {
// //         name: req.body.name,
// //         email: req.body.email,
// //         password : req.body.password ? md5(req.body.password) : undefined
// //     }
// //     db.run(
// //         `UPDATE user set
// //            name = coalesce(?,name),
// //            email = COALESCE(?,email),
// //            password = coalesce(?,password)
// //            WHERE id = ?`,
// //         [data.name, data.email, data.password, req.params.id],
// //         (err, result) => {
// //             if (err){
// //                 res.status(400).json({"error": res.message})
// //                 return;
// //             }
// //             res.json({
// //                 message: "success",
// //                 data: data
// //             })
// //         });
// // })
//
//
// app.delete("/nft/delete/:id", (req, res, next) => {
//     res.json({
//         "message": "deleted",
//         // rows: this.changes
//     });
//
//     // db.run(
//     //     'DELETE FROM user WHERE id = ?',
//     //     req.params.id,
//     //     function (err, result) {
//     //         if (err) {
//     //             res.status(400).json({"error": res.message})
//     //             return;
//     //         }
//     //         res.json({"message": "deleted", rows: this.changes})
//     //     });
// });
//
//
// // Root path
// app.get("/", (req, res, next) => {
//     res.json({
//         "message": "Ok"
//     });
// });