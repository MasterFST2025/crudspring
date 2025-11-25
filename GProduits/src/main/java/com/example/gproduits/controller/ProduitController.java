package com.example.gproduits.controller;

import com.example.gproduits.entities.Produit;
import com.example.gproduits.repository.ProduitRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProduitController {
    final ProduitRepository produitRepository;
    public ProduitController(ProduitRepository produitRepository) {
        this.produitRepository = produitRepository;
    }

    @GetMapping("produits")
    public List<Produit> findAll() {
        return produitRepository.findAll();
    }

    @PostMapping("produits")
    public Produit save(@RequestBody Produit produit) {
        return produitRepository.save(produit);
    }
}
