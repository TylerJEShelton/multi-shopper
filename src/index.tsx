import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <h1>Multi Shopper Checklists</h1>
      <GuestList />
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
