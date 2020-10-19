import React, {useContext} from 'react'
import {Header, Body} from "../components/"
import {Context} from '../context/context'

export function HeaderContainer({children}) {
  const {contatos, activateForm} = useContext(Context)


//filtra contatos da agenda
  function filtrarContato(e) {
    var contatos = document.querySelectorAll(".contato");
      if(e.target.value.length > 0){
          for (let i = 0; i < contatos.length; i++) {
            let contato = contatos[i];
            let tdNome = contato.children[0].children[0];
            let nome = tdNome.textContent;
            let expressao = new RegExp(e.target.value, "i");
          if(!expressao.test(nome)){
            contato.classList.add("invisivel")
          }else{
            contato.classList.remove("invisivel");
          }
      }
    }else{
      for (let p = 0; p < contatos.length; p++) {
        let cont = contatos[p];
        cont.classList.remove("invisivel");
      }
    }
}

  return (
    <Header>
      <Header.Logo src="/img/ic-logo.svg" />
      {contatos.length > 0 ? (
        <Body.Button
          onClick={() => activateForm()}
          style={{marginTop: "0px", marginRight: "10px", height: "32px"}}
        >
          <Body.ButtonImg src="/img/ic-plus.svg"/> Criar contato
        </Body.Button>
      ) : null}
      {children}
      <Header.SearchContainer>
        <Header.SearchInput type="text" placeholder="Buscar..." onChange={(e) => filtrarContato(e)}/>
        <Header.SearchImg src="/img/ic-search.svg" />
      </Header.SearchContainer>
    </Header>
  )
}
