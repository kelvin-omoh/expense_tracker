import React, { useState } from 'react'
import Controls from "../components/Controls";
import Login from "../components/Login";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import NetOutput from "../components/NetOutput";
import Table from "../components/Table";
const MainExpense = () => {
  const [modal, setModal] = useState({ status: false, type: "" });
  const showModal = (modalType) => {
    setModal({ status: true, type: modalType });
  };
  const expenses = [
    {
      id: 1,
      date: "30/20/23",
      description: "chow",
      amount: 3000,
      transaction: "income",
    },
    {
      id: 2,
      date: "30/20/23",
      description: "chow",
      amount: 2000,
      transaction: "expense",
    },
    {
      id: 3,
      date: "30/20/23",
      description: "chow",
      amount: 2000,
      transaction: "income",
    },
  ];
  return (
    <div>
      




    <div>
    
      <NavBar />
     
      <div className="body p-3 overflow-hidden">
        <div className="row gx-3">
          <div className="col flex1" id="controls">
            <Controls onShowModal={showModal}/>
          </div>
          <div className="col flex3 vh-89 overflow-auto">
            <Table expenses={expenses} />
          </div>
          <div className="col overflow-hidden" id="outputNet">
            <NetOutput />
          </div>
        </div>
      </div>
      {modal.status === true && (<Modal type={modal.type}/>)}
    </div>

    </div>
  )
}

export default MainExpense
