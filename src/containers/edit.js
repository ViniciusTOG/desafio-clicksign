import React, { useContext, useState } from "react"
import { Context } from "../context/context"
import { Form } from "../components/"

export function EditContainer({ contato, setEditOn }) {
  const { contatos, setContatos } = useContext(Context)

  const [nome, setNome] = useState(contato.nome)
  const [email, setEmail] = useState(contato.email)
  const [tel, setTel] = useState(contato.tel)

  const editContact = (contato) => {
    contatos.map((item) => {
      if (item.id === contato.id) {
        const index = contatos.indexOf(item)
        const newContatos = [...contatos]
        const newItem = {...newContatos[index],
          nome: nome,
          email: email,
          tel: tel
        }
        newContatos[index] = newItem
        setContatos(newContatos)
        setNome("")
        setEmail("")
        setTel("")
      }
      return item
    });
    setEditOn(false)
  };

  const isValid = nome !== "" || email !== "" || tel !== ""

  return (
    <Form>
      <Form.Title>Editar contato</Form.Title>
      <Form.Frame>
        <Form.Label htmlFor="name">Nome</Form.Label>
        <Form.Input
          type="text"
          id="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Form.Label htmlFor="email">E-mail</Form.Label>
        <Form.Input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label htmlFor="phone">Telefone</Form.Label>
        <Form.Input
          type="tel"
          id="phone"
          style={{ width: "130px" }}
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </Form.Frame>
      <Form.ButtonContainer>
        <Form.Button
          onClick={() => setEditOn(false)}
          style={{ background: "none", boxShadow: "none", color: "#fa7268" }}
        >
          Cancelar
        </Form.Button>
        <Form.Button onClick={() => editContact(contato)} disabled={!isValid}>
          Salvar
        </Form.Button>
      </Form.ButtonContainer>
    </Form>
  )
}
