package com.uguz.server.business.abstracts;

import com.uguz.server.dto.ProductDto;
import com.uguz.server.entities.Product;

import java.util.List;

public interface ProductService {
    boolean create(Product product);
    Product update(long id,double price);
    Product getById(long id);
    Product getProductByPrice(double price);
    Product getProductByTitle(String title);
    List<Product> getAll();
}
