import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
      opajdpoja
    </ChildAsFC>
  );
};

export default Parent;
