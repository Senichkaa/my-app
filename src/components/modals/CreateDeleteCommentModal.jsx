import React from "react";
import { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/material/Delete";

function CreateDeleteCommentModal({ open, onClose, product, updateProduct }) {
  const [description, setDescription] = useState("");

  const addComment = () => {
    if (description) {
      const newComment = {
        id: Date.now(),
        productId: product.id,
        description,
        date: new Date().toLocaleString(),
      };

      const updatedProduct = {
        ...product,
        comments: [product.comments, newComment],
      };

      updateProduct(updatedProduct);
      setDescription("");
    } else {
      alert("Please, enter a comment.");
    }
  };

  const deleteComment = (commentId) => {
    const updatedComments = product.comments.filter(
      (comment) => comment.id !== commentId
    );
    updateProduct({ ...product, comments: updatedComments });
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <Typography variant="h6" component="h2">
          Comments for {product.name}
        </Typography>
        <TextField
          label="Add a comment"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" onClick={addComment} sx={{ mt: 2 }}>
          Add Comment
        </Button>
        <List sx={{ mt: 2 }}>
          {product.comments.map((comment) => (
            <ListItem
              key={comment.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteComment(comment.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              {comment.description}
            </ListItem>
          ))}
        </List>
        <Button variant="outlined" onClick={onClose} sx={{ mt: 2 }}>
          Close
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

export default CreateDeleteCommentModal;
