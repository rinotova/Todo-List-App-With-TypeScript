import CreateTodoForm from './components/CreateTodoForm';
import Todos from './components/Todos';
import TodosProvider from './TodoContext/TodosProvider';

function App() {
  return (
    <TodosProvider>
      <div className='bg-gray-100 min-h-screen p-6 min-w-[390px]'>
        <main className='max-w-screen-sm mx-auto flex items-center flex-col'>
          <CreateTodoForm />
          <Todos />
        </main>
      </div>
    </TodosProvider>
  );
}

export default App;
