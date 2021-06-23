import { useState } from 'react';
import api from '../../services';
import { Overlay, Container, Header, Main, Row, Input, Footer, Spinner } from './styles';

interface Props {
  closeModal: () => void;
}

function AddToolModal({ closeModal }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isNotValidated, setIsNotValidated] = useState(false);
  const [isSuccessed, setIsSuccessed] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");
  
  function AddTool () {
    let arrayTags = tags.split(",");
    let arrayTagsCompleted = [""];

    arrayTags.map((tagObject, index) => {
      arrayTagsCompleted.push(`#${tagObject}`);
    });

    api.post("newTool", {
      "title": title,
      "description": description,
      "link": link,
      "tags": arrayTagsCompleted
    }).then(() => {
      setIsLoading(false);
      setIsSuccessed(true);
    });
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <p>Add new tool</p>
        </Header>
        <Main>
          <Row>
            <Input placeholder="Title" disabled={isSuccessed} value={title} onChange={event => setTitle(event.target.value)} type="text" id="title" />
            <Input placeholder="Description" disabled={isSuccessed} value={description} onChange={event => setDescription(event.target.value)} type="text" id="description" />
          </Row>
          <Row>
            <Input placeholder="Link" disabled={isSuccessed} value={link} onChange={event => setLink(event.target.value)} type="text" id="link" />
            <Input placeholder="Tags" disabled={isSuccessed} value={tags} onChange={event => setTags(event.target.value)} type="text" id="tags" />
          </Row>
          { isNotValidated && <p>Oops, some field was not informed.</p> }
          { isSuccessed && <label>Successed!</label> }
        </Main>
        <Footer>
          <button type="button" onClick={closeModal}>Close</button>
          { isLoading && <Spinner /> }
          <button type="button" onClick={() =>{
            setIsLoading(true);
            setIsNotValidated(false);

            if(title === "" || description === "" || link === "" || tags === "") {
              setIsNotValidated(true);
              setIsLoading(false);
            }
            else{
              AddTool();
            }
          }}>
            Add
          </button>
        </Footer>
      </Container>
    </Overlay>
  );
};

export default AddToolModal;
