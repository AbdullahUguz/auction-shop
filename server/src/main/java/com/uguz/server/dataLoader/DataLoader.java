package com.uguz.server.dataLoader;

import com.uguz.server.business.abstracts.ProductService;
import com.uguz.server.business.abstracts.UserService;
import com.uguz.server.business.concretes.UserManager;
import com.uguz.server.entities.Product;
import com.uguz.server.entities.User;
import com.uguz.server.repository.ProductRepository;
import com.uguz.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private UserService userService;
    private ProductService productService;

    @Autowired
    public DataLoader(UserService userService,ProductService productService){
        this.userService = userService;
        this.productService = productService;
    }

    @Override
    public void run(String... args) throws Exception {
        loadUserData();
        loadProductData();
    }

    private void loadUserData(){
        if(userService.count() == 0){
            User user1= new User(1L,"Admin","admin@gmail.com","12345","admin");
            User user2= new User(2L,"User","user@gmail.com","12345","user");
            User user3= new User(3L,"User2","user2@gmail.com","12345","user");
            userService.create(user1);
            userService.create(user2);
            userService.create(user3);
        }
        System.out.println("user repo count : "+userService.count());
    }
    private void loadProductData(){
        if(productService.count() == 0){
            Product product1= new Product(1L,"An Antique Watch","https://user-images.githubusercontent.com/73312086/227388124-8cca11bb-9f02-41fa-86db-1e1da90c81ec.jpg","Our priceless watch",35.75);
            Product product2=new Product(2L,"An Antique Vase","https://user-images.githubusercontent.com/73312086/227388075-5c335735-803c-4f2d-9e18-16fd8dfd4da3.jpg","As you can see from the details on it, it is one of our most precious pieces.",22.82);
            Product product3=new Product(3L,"An Antique Telephone","https://user-images.githubusercontent.com/73312086/227387810-50b97274-e1af-4ca6-af7a-e1caab205978.jpg","It is one of our rare pieces where you will feel nostalgia at home.",40.50);
            productService.create(product1);
            productService.create(product2);
            productService. create(product3);
        }
        System.out.println("product repo count : "+productService.count());
    }
}
