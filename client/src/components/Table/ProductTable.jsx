import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";

import { fetchGetAllProduct } from "../../api/api";

function ProductTable() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    await fetchGetAllProduct()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return products ? (
    <>
      <TableContainer>
        <Table variant="simple" size="lg">
          <Thead bgColor="green.100">
            <Tr>
              <Th fontSize="md" color="black">
                ID
              </Th>
              <Th fontSize="md" color="black">
                TITLE
              </Th>
              <Th fontSize="md" color="black" isNumeric>
                PRICE
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id}>
                <Td>{product.id}</Td>
                <Td>{product.title}</Td>
                <Td isNumeric>{product.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  ) : (
    <Text>Loading...</Text>
  );
}

export default ProductTable;
