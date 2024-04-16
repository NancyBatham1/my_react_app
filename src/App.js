import Header from './components/Header';
import {TodoItem} from './components/TodoItem';
import Footer from './components/Footer';
import Todos from './components/Todos';

function App() {
  let todolist=[
    {
      sno:1,
      title:'title1',
      desc:'desc1',

    },
    {
      sno:2,
      title:'title2',
      desc:'desc2',

    }, {
      sno:3,
      title:'title3',
      desc:'desc3',

    },
  ]
  return (
    <>
      <Header logo='MyReact'  />
      <Todos todo={todolist} />
      <Footer />
    </> 
  );
}

export default App;
