import { createContext, useContext, useState } from 'react';

const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
  const [listaAtualId, setListaAtualId] = useState(null);

  const setListaId = (id) => {
    setListaAtualId(id);
  };

  return (
    <ProdutosContext.Provider value={{ listaAtualId, setListaId }}>
      {children}
    </ProdutosContext.Provider>
  );
};

export const useProdutosContext = () => {
  return useContext(ProdutosContext);
};
