import React from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

function RemoveProductModal({ open, onClose, product, removeProduct }) {
  const handleRemove = () => {
    removeProduct(product.id);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <Typography variant="h6" component="h2">
          Delete Product
        </Typography>
        <Typography>Are you sure you want to delete {product.name}?</Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleRemove}
          sx={{ mt: 2 }}
        >
          Delete
        </Button>
        <Button variant="outlined" onClick={onClose} sx={{ mt: 2, ml: 2 }}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default RemoveProductModal;
