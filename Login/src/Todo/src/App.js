import {useEffect} from 'react';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';


function Todo() {
  const [items, setItems] = useState([]);
  const [newitems, setNewitems] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('todoItems'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  const updateLocalStorage = (newItems) => {
    localStorage.setItem('todoItems', JSON.stringify(newItems));
  };

  const additem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const add = { id, checked: false, item };
    const newItems = [...items, add];
    setItems(newItems);
    updateLocalStorage(newItems);
  };

  const handleclick = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
    updateLocalStorage(listitems);
  };

  const handledelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setItems(listitems);
    updateLocalStorage(listitems);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!newitems.trim()) return;
    additem(newitems);
    setNewitems('');
  }

  return (
    <main className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg transition-all duration-300">
      <header className="text-4xl font-bold text-center text-gray-700 mb-8">
        Todo List
      </header>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search todos..."
          className="w-full p-4 text-lg rounded-full shadow-inner text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Add New Items */}
      <form onSubmit={handleSubmit} className="flex items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Add a new todo..."
          className="flex-grow p-4 mr-4 text-lg rounded-full shadow-inner text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          value={newitems}
          onChange={(e) => setNewitems(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 focus:ring-2 focus:ring-blue-400"
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
      
        {(
          <div>
            {items.length ? (
              <ul className="space-y-4">
                {items
                  .filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))
                  .map((item) => (
                    <li
                      key={item.id}
                      className={`flex items-center justify-between p-4 border-b border-gray-300 transition-all duration-300 ${
                        item.checked ? 'bg-green-100' : 'hover:bg-gray-100'
                      } rounded-lg shadow-md`}
                    >
                      <div className="flex items-center">
                        <input
                          className="mr-4 w-5 h-5 text-blue-500 border-gray-300 rounded-full focus:ring-blue-400 transition-all duration-300 cursor-pointer"
                          type="checkbox"
                          onChange={() => handleclick(item.id)}
                          checked={item.checked}
                        />
                        <label
                          className={`text-lg font-medium transition-all duration-300 ${
                            item.checked ? 'line-through text-gray-500' : 'text-gray-800'
                          }`}
                        >
                          {item.item}
                        </label>
                      </div>
                      <FaTrash
                        className="text-red-500 cursor-pointer transition-transform transform duration-300 hover:scale-110"
                        onClick={() => handledelete(item.id)}
                      />
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="text-center text-lg text-gray-500">Your list is empty!!!</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default Todo;
