CREATE DATABASE IF NOT EXISTS easy33_parfums;
USE easy33_parfums;

CREATE TABLE produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    marque VARCHAR(100),
    categorie ENUM('homme', 'femme') NOT NULL,
    prix_base DECIMAL(10,2) NOT NULL
);

CREATE TABLE avis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    note INT,
    commentaire TEXT,
    date_avis DATETIME DEFAULT CURRENT_TIMESTAMP,
    approuve BOOLEAN DEFAULT TRUE
);

INSERT INTO produits (nom, marque, categorie, prix_base) VALUES
('La Vie Est Belle', 'Lancôme', 'femme', 2.90),
('Chanel Coco Mademoiselle', 'Chanel', 'femme', 2.90),
('Dior Hypnotic Poison', 'Dior', 'femme', 2.90),
('Bleu de Chanel', 'Chanel', 'homme', 2.90),
('Dior Sauvage', 'Dior', 'homme', 2.90);

INSERT INTO avis (note, commentaire, date_avis) VALUES
(5, 'Excellent produit, livraison rapide!', '2023-01-15'),
(5, 'Parfait pour mon commerce, je recommande', '2023-06-20'),
(4, 'Bon rapport qualité-prix', '2024-03-10');
