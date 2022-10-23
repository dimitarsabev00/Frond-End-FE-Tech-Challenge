import { Box, Pagination } from "@mui/material";
import React from "react";

const Pages = ({ itemPerPage, total, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        count={pageNumbers.length}
        pageNumbers={pageNumbers}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        onChange={handleChange}
        sx={{ marginTop: "3rem" }}
      />
    </Box>
  );
};

export default Pages;
