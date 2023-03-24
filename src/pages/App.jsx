import { useState } from 'react';
import { Container } from './style';
import Input from '../components/input/index';
import Button from '../components/Button';
import ItensUser from '../components/UserRepo/User';
import { Api } from '../services/Api';
import gitLogo from '../img/git.png';
import '../App.css';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    try {
      const { data } = await Api.get(`/users/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }

      alert('Usuario já encontrado');
    } catch (error) {
      console.log('Error. Tente novamente mais tarde.', error);
    }
  };

  const handleRemoveUser = (id) => {
    const removeUser = repos.filter((user) => id !== user.id);
    setRepos(removeUser);
  };

  return (
    <Container className="App">
      <img className="logo" src={gitLogo} alt="GitHub logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearch} />
      {repos.map((user) => (
        <ItensUser key={user.id} itens={user} handleRemoveUser={handleRemoveUser} />
      ))}
    </Container>
  );
}

export default App;
