import { Container, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductDetailCard from "../../components/Card/ProductDetailCard";
import ChatCard from "../../components/Card/ChatCard";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../api/api";

function ProductDetail() {
  const [price,setPrice]=useState();
  const { productId } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    console.log("productId : ", productId);

    getProductById();
  }, []);

  const getProductById = async () => {
    await fetchProductById(productId)
      .then((res) => {
        console.log("res getProductById : ", res);
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
          <ProductDetailCard product={product} price={price}></ProductDetailCard>
        ) : (
          <p>Loading...</p>
        )}
        <ChatCard price={price}  setPrice={setPrice}></ChatCard>
      </SimpleGrid>
    </Container>
  );
}

export default ProductDetail;
