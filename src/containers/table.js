import React, {useContext, useState} from 'react'
import {Table} from '../components/'
import {Context} from "../context/context"
import {DeleteContainer} from './delete'
import {EditContainer} from './edit'

export function TableContainer() {

const {contatos, setContatos, deleteOn, setDeleteOn, editOn, setEditOn} = useContext(Context)
const [contatoObj, setContatoObj] = useState({})


const deleteContact = (contato) => {
  setContatoObj(contato)
  setDeleteOn(true)
}

const editContact = (contato) => {
  setContatoObj(contato)
  setEditOn(true)
}

//tr animation apenas uma vez
function animateTr(e, contato) {
  if(contato.animate){
    e.target.parentNode.parentNode.parentNode.parentNode.className = "animar";
  }
  contatos.map((item) => {
    if (item.id === contato.id) {
      const index = contatos.indexOf(item);
      const newContatos = [...contatos];
      const newItem = {
        ...newContatos[index],
        animate: false
      };
      newContatos[index] = newItem;
      setContatos(newContatos);
    }
    return item;
  });
};

//lista por ordem alfabetica
const contatosSorted = contatos.sort(function (a, b) {
  let textA = a.nome.toUpperCase()
  let textB = b.nome.toUpperCase()
  return textA < textB ? -1 : textA > textB ? 1 : 0
})

//retorna os contatos da tabela
  const contatosList = contatosSorted.map(contato => {
    return (
      <Table.Tr
        key={contato.id}
        className="contato"
        onLoad={(e) => animateTr(e, contato)}
      >
        <Table.Td>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: contato.color,
                marginRight: "12px",
                marginLeft: "8px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {contato.nome[0].toUpperCase()}
            </div>
            {contato.nome}
          </div>
        </Table.Td>
        <Table.Td>{contato.email}</Table.Td>
        <Table.Td>{contato.tel}</Table.Td>
        <Table.Td>
          <Table.Div>
            <Table.Button onClick={() => editContact(contato)}>
              <Table.ButtonImg src="/img/ic-edit.svg" />
            </Table.Button>
            <Table.Button onClick={() => deleteContact(contato)}>
              <Table.ButtonImg src="/img/ic-delete.svg" />
            </Table.Button>
          </Table.Div>
        </Table.Td>
      </Table.Tr>
    );
  })

  return (
    <div
      style={{
        width: "100%",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {deleteOn && (
        <DeleteContainer contato={contatoObj} setDeleteOn={setDeleteOn} />
      )}
      {editOn && (
        <EditContainer contato={contatoObj} setEditOn={setEditOn} />
      )}
      <Table>
        <Table.Head>
          <Table.Tr>
            <Table.Td style={{ paddingLeft: "45px" }}>Contatos</Table.Td>
            <Table.Td>E-mail</Table.Td>
            <Table.Td>Telefone</Table.Td>
            <Table.Td></Table.Td>
          </Table.Tr>
        </Table.Head>
        <Table.Body>{contatosList}</Table.Body>
      </Table>
    </div>
  )
}



