package com.uguz.server.api.controllers;

import com.uguz.server.business.abstracts.ProductService;
import com.uguz.server.dto.ProductDto;
import com.uguz.server.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/products")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService=productService;
    }

    @PostMapping("/create")
    private ResponseEntity<String> create(@RequestBody Product product){
        // buraya bir kontrol eklenebilir
        this.productService.create(product);
        return new ResponseEntity<>("Product created", HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    private ResponseEntity<List<Product>> getAll(){
        List<Product> products = this.productService.getAll();
        if(products == null){
            return  new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(products,HttpStatus.OK);
    }

    @GetMapping("/getProductById/{productId}")
    private ResponseEntity<Product> getByProductId(@PathVariable Long productId){
        Product product = this.productService.getById(productId);
        return new ResponseEntity<>(product,HttpStatus.OK);
    }

    @GetMapping("/getProductByPrice")
    private ResponseEntity<Product> getProductByPrice(@RequestBody ProductDto productDto){
        Product product = this.productService.getProductByPrice(productDto.getPrice());
        System.out.println("pssp : "+product.getTitle());
        return new ResponseEntity<>(product,HttpStatus.OK);
    }

    @PutMapping("/updatePrice/{productId}")
    private ResponseEntity<Product> updatePrice(@PathVariable Long productId,@RequestBody ProductDto productDto){
        Product product =this.productService.update(productId,productDto.getPrice());
        return  new ResponseEntity<>(product,HttpStatus.OK);
    }

}
