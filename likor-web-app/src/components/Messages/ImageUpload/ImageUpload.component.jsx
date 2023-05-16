import React, { useState, useEffect } from "react";
import { Input, Modal, Button, Icon, Message } from "semantic-ui-react";
import mime from "mime-types";

export const ImageUpload = (props) => {
  const [fileState, setFileState] = useState(null);
  const [error, setError] = useState("");

  const acceptedTypes = ["image/png", "image/jpeg"];

  useEffect(() => {
    if (!props.open) {
      setFileState(null);
      setError("");
    }
  }, [props.open]);

  const onFileAdded = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileState(file);
    }
  };

  const submit = () => {
    const mimeType = fileState ? mime.lookup(fileState.name) : null;
    if (fileState && acceptedTypes.includes(mimeType)) {
      props.uploadImage(fileState, mimeType);
      props.onClose();
    } else {
      setError("Unsupported file type. Please upload png or jpeg file.");
    }
  };

  return (
    <Modal basic open={props.open} onClose={props.onClose}>
      <Modal.Header>Select an image</Modal.Header>
      <Modal.Content>
        <Input
          type='file'
          name='file'
          onChange={onFileAdded}
          fluid
          label='File Type (png , jpeg)'
        />
        {error && <Message error content={error} />}
      </Modal.Content>
      <Modal.Actions>
        <Button color='blue' onClick={submit}>
          <Icon name='checkmark' />
          Add
        </Button>
        <Button color='red' onClick={props.onClose}>
          <Icon name='remove' />
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
