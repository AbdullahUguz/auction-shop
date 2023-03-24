package com.uguz.server.business.concretes;

import com.uguz.server.business.abstracts.ProductService;
import com.uguz.server.entities.Product;
import com.uguz.server.entities.User;
import com.uguz.server.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductManager implements ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductManager(ProductRepository productRepository){
        this.productRepository=productRepository;
    }

    @Override
    public boolean create(Product product) {
        this.productRepository.save(product);
        return true;
    }

    @Override
    public Product findById(long id) {
        return this.productRepository.findById(id);
    }

    @Override
    public Product findProductByPrice(double price) {
        return this.productRepository.findProductByPrice(price);
    }

    @Override
    public List<Product> findAll() {
        return this.productRepository.findAll();
    }
}
