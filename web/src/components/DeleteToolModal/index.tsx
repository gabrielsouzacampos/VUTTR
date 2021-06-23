import { useState } from 'react';
import api from '../../services';
import { Overlay, Container, Header, Main, Row, Footer, Spinner } from './styles';

interface Props {
  closeModal: () => void;
  idTool: String;
}

function DeleteToolModal({ closeModal, idTool }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessed, setIsSuccessed] = useState(false);

  function deleteTool() {
    setIsLoading(true);

    api.delete("deleteTool", {
      data: {
        "id": idTool
      }
    }).then(() => {
      setIsLoading(false);
      setIsSuccessed(true);
    });
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <p>Delete tool</p>
        </Header>
        <Main>
          <Row>
            <p>Are you sure you want to delete this tool?</p>
          </Row>
          { isSuccessed && <label>Successed!</label> }
        </Main>
        <Footer>
          <button type="button" onClick={closeModal}>Close</button>
          { isLoading && <Spinner /> }
          <button type="button" disabled={isSuccessed} onClick={deleteTool}>Delete</button>
        </Footer>
      </Container>
    </Overlay>
  );
};

export default DeleteToolModal;
