# Auction-Shop

## Bilgiler
- Name: "Abdullah",
- Surname: "UĞUZ",
- Email: "abdullahuguz08@gmail.com",
- RegistrationKey: "d3c044bd61e9ea28917af13988b17b5ec050d70643729239f3387f501e4ceaf0"



## Açıklama

Acuation Shop projesi, kullanıcıların online olarak müzayedeye canlı bir şekilde katılabildikleri bir platformdur ve bu platform üzerinden ürünler açık artırmaya sunulmaktadır.

## Kurulum

Projeyi indirdikten sonra;

1. Terminalinizden docker-compose.yml dosyasının olduğu dizinine gelerek `docker-compose up` komutunu çalıştırınız. Bu komut docker da `auctionshop` adında container oluşturur ve içinde postgre ve redisi ayağa kaldırır.
2. Server dosyamızı açıp çalıştırınız. ( Tercihen Intellij Idea editöründe çalıştırabilirsiniz.)
3. Client dosyamızın içerisine girip `npm install` komutunu çalıştırınız. Gerekli dependencies kurulduktan sonra `npm run` komutu ile clientı çalıştırınız.

## Kullanım

Projede server kısmı çalıştıktan sonra Data Loader yapısı ile kullanıcılar ve ürünler otomatik olarak sisteme eklenecektir.

Sisteme Kayıtlı Kullanıcıların Bilgileri:

| Username | Email           | Şifre | Role  |
|----------|----------------|-------|-------|
| Admin    | admin@gmail.com | 12345 | admin |
| User     | user@gmail.com  | 12345 | user  |
| User2    | user2@gmail.com | 12345 | user  |

Client çalıştıktan sonra yukarıdaki bilgiler ile sisteme giriş yapabilirsiniz. İsterseniz register sayfasından yeni kullanıcı ekleyebilirisiniz.

Giriş yaptıktan sonra ana sayfaya gelen ürünlerden birini seçip müzayede ekranına gidebilirsiniz.

Müzayede ekranına geldikten sonra eğer diğer kullanıcılar yeni fiyat veriyorsalar veren kişi ve vermiş olduğu fiyat ekranda gözükür. Aynı zamanda ürünün fiyatı da güncellenmektedir. Siz de müzayedeye katılmak istiyorsanız "Join" butonuna tıklayarak katılabilirsiniz.


### Proje Tanıtım Videosu 
https://youtu.be/K5z_lrhssl0




