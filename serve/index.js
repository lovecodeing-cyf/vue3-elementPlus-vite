const express = require("express");
const { useRouter } = require("vue-router");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(useRouter) 
