const express = require('express');

function create(req, res, next) {
    const {n1, n2} = req.params;
    res.send((Number(n1) * Number(n2)).toString());
};

function list(req, res, next) {
    res.send("Results list");
};

function index(req, res, next) {
    const {n1, n2} = req.params;
    res.send((Number(n1) + Number(n2)).toString());
};

function replace(req, res, next) {
    const {n1, n2} = req.params;
    if (n2 != 0){
        res.send((Number(n1) / Number(n2)).toString());
    }
    else{
        res.send("Cannot divide by zero bro");;
    }
};

function update(req, res, next){
    const {n1, n2} = req.params;
    res.send((Math.pow(Number(n1), Number(n2))).toString()); 
};

function destroy(req, res, next){
    const {n1, n2} = req.params;
    res.send((Number(n1) - Number(n2)).toString());
};

module.exports = {
    create, index,replace, update, destroy, list
};