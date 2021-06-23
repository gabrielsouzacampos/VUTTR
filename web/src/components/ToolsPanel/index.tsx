import { useState } from 'react';
import { Container , Header, Footer} from './styles';
import DeleteToolModal from '../DeleteToolModal';

interface ToolsPanelProps {
  Id: string;
  Title: string;
  Link: string;
  Description: string;
  Tags: string[];
}

function ToolsPanel({ Id, Title, Link, Description, Tags }: ToolsPanelProps) {
  const [isDeleteToolModalOpen, setIsDeleteToolModalOpen] = useState(false);
  
  return (
    <Container>
      
      <Header>
        <a href={Link} target="_blank">{Title}</a>
        <button type="button" onClick={() => setIsDeleteToolModalOpen(true)}>X</button>
      </Header>

      <p>{Description}</p>

      <Footer>
        {
          Tags.map(tag => {
            return (
              <span key={tag}>#{tag}</span>
            )
          })
        }
      </Footer>

      {isDeleteToolModalOpen && <DeleteToolModal closeModal={() => setIsDeleteToolModalOpen(false)} idTool={Id} />}
    </Container>
  );
};

export default ToolsPanel;
