import React, { useEffect, useState } from 'react';
import ToolsPanel from '../ToolsPanel';
import api from '../../services';
import AddToolModal from '../AddToolModal';
import { Container, SearchInput, CheckBoxInput, AddButton, MenuContainer, Tool } from './styles';

interface Tool {
  _id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

function Main() {
  const [tools, setTool] = useState<Tool[]>([]);
  const [search, setSearch] = useState("");
  const [tagsOnlySearch, setTagsOnlySearch] = useState(false);
  const [isAddToolModalOpen, setIsAddToolModalOpen] = useState(false);
  
  useEffect(() => {
    if(!tagsOnlySearch) {
      api.get(`tools`, { params: {"all": search}}).then(response => {
        setTool(response.data);
      });
    }
    else{
      api.get(`tools`, {params: {"tag": search}}).then(response => {
        setTool(response.data);
      });
    }
  }, [search]);

  return (
    <Container>
      <MenuContainer>
        <div>
          <SearchInput value={search} onChange={event => setSearch(event.target.value)} placeholder="search" />
          <label>
            <CheckBoxInput type="checkbox" defaultChecked={tagsOnlySearch} onChange={() => setTagsOnlySearch(!tagsOnlySearch)} />
            <span>Search in tags only</span>
          </label>
        </div>
        <AddButton onClick={() => setIsAddToolModalOpen(true)}>+ Add</AddButton>
      </MenuContainer>
      
      <Tool>
        {
          tools.map((toolObject, index) => {
            return(
              <ToolsPanel key={index} Id={toolObject._id} Title={toolObject.title} Link={toolObject.link} Description={toolObject.description} Tags={toolObject.tags} />
            )
          })
        }  
      </Tool>
      
      {isAddToolModalOpen && <AddToolModal closeModal={() => setIsAddToolModalOpen(false)} />}

    </Container>
  );
};

export default Main;
