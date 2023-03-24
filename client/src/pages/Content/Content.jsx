import { Container, Flex, Stack, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchGetAllProduct } from "../../api/api";
import ProductCard from "../../components/Card/ProductCard";

function Content() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    await fetchGetAllProduct()
      .then((res) => {
        console.log("res getAll : ", res);
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxW="1400px" mt={3}>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(350px, 2fr))"
      >
        {products ? (
          products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
        ) : (
          <p>Loading...</p>
        )}
      </SimpleGrid>
    </Container>
  );
}

export default Content;
