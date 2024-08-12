import React from "react";
import { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

function AddProductModal({ open, onClose, addProduct }) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [weight, setWeight] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = () => {
    if (name && count && size.width && size.height && weight && imageUrl) {
      addProduct({
        id: Date.now(),
        name,
        count,
        size,
        weight,
        imageUrl,
        comments: [],
      });
      onClose();
    } else {
      alert("Please, fill all fields.");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <Typography variant="h6" component="h2">
          Add Product
        </Typography>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Count"
          type="number"
          fullWidth
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          margin="normal"
        />
        <TextField
          label="Width"
          type="number"
          fullWidth
          value={size.width}
          onChange={(e) => setSize({ ...size, width: Number(e.target.value) })}
          margin="normal"
        />
        <TextField
          label="Height"
          type="number"
          fullWidth
          value={size.height}
          onChange={(e) => setSize({ ...size, height: Number(e.target.value) })}
          margin="normal"
        />
        <TextField
          label="Weight"
          fullWidth
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Image URL"
          fullWidth
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
          Add
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

export default AddProductModal;
