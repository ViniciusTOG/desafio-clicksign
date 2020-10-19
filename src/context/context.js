import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
  const [contatos, setContatos] = useState([])
  const [activeForm, setActiveForm] = useState(false)
  const [deleteOn, setDeleteOn] = useState(false)
  const [editOn, setEditOn] = useState(false)


// resgatando contatos do localstorage
  useEffect(() => {
    if(contatos.length === 0){
      const contatosAntigos = JSON.parse(
        localStorage.getItem("contatos") || "[]"
      );
      setContatos(contatosAntigos);
    }
}, [contatos.length])

  const activateForm = () => {
      setActiveForm(true)
  }

  const desactivateForm = () => {
      setActiveForm(false)
  }

  return (
    <Context.Provider
      value={{
        contatos,
        setContatos,
        activeForm,
        activateForm,
        desactivateForm,
        deleteOn,
        setDeleteOn,
        editOn,
        setEditOn
      }}
    >
      {children}
    </Context.Provider>
  );

}

export {ContextProvider, Context}
