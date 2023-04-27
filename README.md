# Auction-Shop

**Technologies Used in the Project;**
 - Spring Boot
 - ReactJS ( Chakra-ui was used for design )
 - Websocket
 - Redis 
 - PostgreSQL

## Description

The "Acuation Shop" project is a platform that enables users to participate in live online auctions, where various products are presented for auction. It provides a convenient and easy-to-use interface for users to bid on items and monitor the live bidding process. 

## Installation

After downloading the project;

1. Navigate to the directory where the docker-compose.yml file is located in your terminal and run the command `docker-compose up`. This command creates a container called `auctionshop` in Docker and runs Postgre and Redis inside it..
2. Open and run our server file. (Preferably in Intellij Idea editor.)
3. Go to the client directory and run the `npm install` command. After the necessary dependencies are installed, run the client with the `npm run` command.

## Usage

After the server part of the project is up and running, users and products will be automatically added to the system through the Data Loader structure.

Information of Registered Users;

| Username | Email           | Password | Role  |
|----------|----------------|-------|-------|
| Admin    | admin@gmail.com | 12345 | admin |
| User     | user@gmail.com  | 12345 | user  |
| User2    | user2@gmail.com | 12345 | user  |

After running the client, you can login to the system with the above information. You can also add a new user from the register page if you want.

( Even if you turn off the server and restart it after logging in to the system, the same user continues to use the platform. Because I keep session information in redis. )

After logging in, you can select one of the products on the home page and go to the auction screen.

Once you're on the auction screen, if other users are giving new prices, the person who gave the price and the price they gave are displayed on the screen. At the same time, the price of the product is also updated. You can also join the auction by clicking the "Join" button if you want.



