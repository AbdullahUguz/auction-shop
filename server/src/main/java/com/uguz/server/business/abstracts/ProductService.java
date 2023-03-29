package com.uguz.server.business.abstracts;

import com.uguz.server.entities.Product;

import java.util.List;

public interface ProductService {
    void create(Product product);
    Product getById(long id);
    List<Product> getAll();
    long count();
}
