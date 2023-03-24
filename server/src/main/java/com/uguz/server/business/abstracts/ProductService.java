package com.uguz.server.business.abstracts;

import com.uguz.server.entities.Product;

import java.util.List;

public interface ProductService {
    boolean create(Product product);
    Product findById(long id);
    Product findProductByPrice(double price);
    List<Product> findAll();
}
