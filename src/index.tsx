import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearchClass from './classes/UserSearch';

const users = [
  { name: 'Sarah', age: 22 },
  { name: 'Kelly', age: 23 },
  { name: 'Tom', age: 24 },
  { name: 'Mark', age: 18 },
];

const App = () => {
  return (
    <div>
      <h1>Multi Shopper Checklists</h1>
      <GuestList />
      <UserSearch />
      <EventComponent />
      <UserSearchClass users={users} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
