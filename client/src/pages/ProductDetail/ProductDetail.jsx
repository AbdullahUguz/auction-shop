import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductDetailCard from "../../components/Card/ProductDetailCard";
import ChatCard from "../../components/Card/ChatCard";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../api/api";

function ProductDetail() {
  const [price, setPrice] = useState();
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    await fetchProductById(productId)
      .then((res) => {
        setProduct(res);
        setPrice(res.price);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxW="1400px" mt={3}>
      <SimpleGrid columns={[1, null, 2]} spacing="20px">
        {product ? (
          <>
            <ProductDetailCard
              product={product}
              price={price}
            ></ProductDetailCard>
            <ChatCard price={price} setPrice={setPrice}></ChatCard>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </SimpleGrid>
    </Container>
  );
}

export default ProductDetail;
