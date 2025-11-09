const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes API
app.use('/api/produits', require('./routes/produits'));
app.use('/api/commandes', require('./routes/commandes'));
app.use('/api/utilisateurs', require('./routes/utilisateurs'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/panier', require('./routes/panier'));
app.use('/api/avis', require('./routes/avis'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/suivi', require('./routes/suivi'));
app.use('/api/admin', require('./routes/admin'));

// Routes principales
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/produits', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/produits.html'));
});

app.get('/panier', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/panier.html'));
});

app.get('/commande', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/commande.html'));
});

app.get('/inscription', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/inscription.html'));
});

app.get('/connexion', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/connexion.html'));
});

app.get('/compte', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/compte.html'));
});

app.get('/suivi-colis', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/suivi-colis.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/contact.html'));
});

app.get('/avis', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/avis.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/admin.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur Easy33 démarré sur http://localhost:${PORT}`);
    console.log(`📦 API disponible sur http://localhost:${PORT}/api`);
    console.log(`👑 Admin: http://localhost:${PORT}/admin`);
});
