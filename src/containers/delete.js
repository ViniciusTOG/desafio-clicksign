import React, {useContext} from 'react'
import {Context} from '../context/context'
import {Form} from '../components/'

export function DeleteContainer({contato, setDeleteOn}) {

  const {contatos, setContatos} = useContext(Context)

  const deleteContact = (contato) => {
    contatos.map((item) => {
      if (item.id === contato.id) {
        const newContatos = contatos.filter((item) => item.id !== contato.id)
        setContatos(newContatos)
        //deletando do localstorage
        localStorage.setItem("contatos", JSON.stringify(newContatos));
      }
      return item
    })
    setDeleteOn(false)
  }

  return(
    <Form>
      <Form.Title>Excluir contato</Form.Title>
      <Form.Frame>
        <Form.Text>Deseja realmente excluir o contato?</Form.Text>
      </Form.Frame>
      <Form.ButtonContainer>
          <Form.Button
            onClick={() => setDeleteOn(false)}
            style={{ background: "none", boxShadow: "none", color: "#fa7268" }}
          >
            Cancelar
          </Form.Button>
          <Form.Button onClick={() => deleteContact(contato)}>
            Excluir
          </Form.Button>
        </Form.ButtonContainer>
    </Form>
  )

}
