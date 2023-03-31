import { useState } from 'react';
import { Container } from './style';
import Input from '../components/input/index';
import Button from '../components/Button';
import ItensUser from '../components/UserRepo/User';
import { Api } from '../services/Api';
import '../App.css';
import gitLogo from "../assents/img/git.png"


function App() {

  const [currentRepo, setCurrentRepo] = useState<string>('');
  const [repos, setRepos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSearch = async () => {
    try {
      const { data } = await Api.get(`/users/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo('');
          setErrorMessage('');
          return;
        }
      }


    } catch (error) {
      setErrorMessage('Usuário não encontrado. Verifique o nome de usuário e tente novamente.');
    }
  };

  const handleRemoveUser = (id: number) => {
    const removeUser = repos.filter((user) => id !== user.id);
    setRepos(removeUser);
  };

  return (
    <Container className="App">
      <img className="logo" src={gitLogo} alt="GitHub logo" />
      <Input value={currentRepo} onChange={(e: any) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearch} />
      {errorMessage && <p>{errorMessage}</p>}
      {repos.map((user) => (
        <ItensUser key={user.id} itens={user} handleRemoveUser={handleRemoveUser} />
      ))}
    </Container>
  );
}

export default App;
