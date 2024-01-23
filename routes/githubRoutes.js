const express = require('express');
const githubController = require('../controllers/githubController');

const router = express.Router();

router.get('/top-google-repos', async (req, res) => {
  try {
    const topTenRepos = await githubController.getTopGoogleRepos();
    res.json(topTenRepos);
  } catch (error) {
    res.status(500).send('Error al obtener los repositorios de GitHub');
  }
});

module.exports = router;