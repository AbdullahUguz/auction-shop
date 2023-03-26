package com.uguz.server.business.concretes;

import com.uguz.server.business.abstracts.ProductService;
import com.uguz.server.dto.ProductDto;
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
    public Product getById(long id) {
        return this.productRepository.findById(id);
    }

    @Override
    public Product getProductByPrice(double price) {
        return this.productRepository.findProductByPrice(price);
    }

    @Override
    public Product getProductByTitle(String title) {
        return this.productRepository.findProductByTitle(title);
    }

    @Override
    public Product update(long id,double price) {
        Product product = this.getById(id);
        if(product == null){
            System.out.println("product null");
            return null;
        }else {
            product.setPrice(price);
            this.productRepository.save(product);
            return  product;
        }
    }

    @Override
    public List<Product> getAll() {
        return this.productRepository.findAll();
    }
}
