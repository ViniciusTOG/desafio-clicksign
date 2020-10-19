import React, {useContext} from 'react'
import {HeaderContainer} from '../containers/header'
import {BodyContainer} from '../containers/body'
import {Context} from '../context/context'

export default function Home() {

  const {activeForm, deleteOn, editOn} = useContext(Context)

  const modalOn = activeForm || deleteOn || editOn

  const div = (
    <div
      style={{
        display: "block",
        position: "fixed",
        zIndex: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.4)",
      }}
    ></div>
  );

  return (
    <>
      {modalOn ? div : null}
      <HeaderContainer></HeaderContainer>
      <BodyContainer></BodyContainer>
    </>
  );
}
