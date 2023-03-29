package com.uguz.server.business.concretes;

import com.uguz.server.business.abstracts.ProductService;
import com.uguz.server.entities.Product;
import com.uguz.server.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@EnableAutoConfiguration
public class ProductManager implements ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductManager(ProductRepository productRepository){
        this.productRepository=productRepository;
    }

    @Override
    public void create(Product product) {
        this.productRepository.save(product);
    }

    @Override
    public long count() {
        return this.productRepository.count();
    }

    @Override
    public Product getById(long id) {
        return this.productRepository.findById(id);
    }

    @Override
    public List<Product> getAll() {
        return this.productRepository.findAll();
    }


}
