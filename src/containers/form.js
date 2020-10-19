import React, {useContext, useState} from 'react'
import {Form} from '../components/'
import {Context} from "../context/context"
import chroma from "chroma-js"


export function FormContainer({children}) {

  const {contatos, setContatos, desactivateForm} = useContext(Context)

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")

  //gerando uma id unica
  function id() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  //adicionando contato
  const handleSubmit = (e) => {
    e.preventDefault()
    setContatos([
      ...contatos,
      {
        id: id(),
        nome: nome,
        email: email,
        tel: tel,
        color: chroma.random().luminance(0.3).hex(),
        animate: true
      },
    ]);
    setNome("")
    setEmail("")
    setTel("")
    desactivateForm()
  }

  //checando se algum dado do formulario foi preenchido
  const isValid = nome !== ""
  return (
      <Form onSubmit={handleSubmit}>
        <Form.Title>Criar novo contato</Form.Title>
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
            onClick={() => desactivateForm()}
            style={{ background: "none", boxShadow: "none", color: "#fa7268" }}
          >
            Cancelar
          </Form.Button>
          <Form.Button type="submit" disabled={!isValid}>
            Salvar
          </Form.Button>
        </Form.ButtonContainer>
      </Form>
  )
}
