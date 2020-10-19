import React, {useContext, useEffect} from 'react'
import {Body} from '../components'
import {FormContainer} from './form'
import {TableContainer} from './table'
import {Context} from '../context/context'

export function BodyContainer({children}) {

  const {contatos, activeForm, activateForm} = useContext(Context)

  const mainHomeStyle = {
    marginTop: "64px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  //atualizando localstorage
  useEffect(() => {
    if(contatos.length > 0 ) {
      localStorage.setItem("contatos", JSON.stringify(contatos))
    }
  }, [contatos])

  const mainHome = (
    <div style={mainHomeStyle}>
      <Body.Image src="/img/ic-book.svg" />
        <Body.Text>Nenhum contato foi criado ainda.</Body.Text>
        <Body.Button onClick={() => activateForm()}>
          <Body.ButtonImg src="/img/ic-plus.svg"/> Criar contato
      </Body.Button>
    </div>
  )

  return (
    <Body>
      {activeForm && <FormContainer />}
      {contatos.length > 0 ? <TableContainer /> : mainHome}
      {children}
    </Body>
  );
}
