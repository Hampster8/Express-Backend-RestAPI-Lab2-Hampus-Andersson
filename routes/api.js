
const express = require('express');
const router = express.Router();
const faker = require('@faker-js/faker').default;
const axios = require('axios').default;

// http://localhost:1234/api
router.get('/names', (_req, res) => {
    const names = [];
    for(let i = 0; i < 20; i++) {
        names.push(faker.name.firstName());
    }
    res.json(names);
});

// http://localhost:1234/api/countries
router.get('/companies', (_req, res) => {
    const companies = [];
    for(let i = 0; i < 20; i++) {
        companies.push(faker.company.companyName());
    }
    res.json(companies);
});

// http://localhost:1234/api/posts
router.get('/posts', async (_req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const posts = await response.data;
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
