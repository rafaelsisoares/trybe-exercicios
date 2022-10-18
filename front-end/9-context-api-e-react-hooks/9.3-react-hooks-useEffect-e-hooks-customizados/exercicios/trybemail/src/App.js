import React, { useState, useEffect } from 'react';
import { READ, UNREAD } from './utils/consts';

import './App.css';
import EmailList from './components/EmailList';
import { emails } from './utils/emails';
import Controls from './components/Controls';

function App() {
  const [emailList, setEmailList] = useState(emails);

  useEffect(() => {
    const allEmailsRead = emailList.every(({status}) => status === READ);
    (allEmailsRead) && alert('Parabéns, você leu todos os e-mails!')
  }, [emailList])

  function setEmailStatus(emailId, status) {
    const updatedEmail = emailList.map((email) => {
      if (email.id === emailId) {
        return {...email, status,};
      }
      return email;
    });
    setEmailList(updatedEmail);
  }

  function allRead() {
    const allEmailsRead = emailList.map((email) => ({...email, status: READ}));
    setEmailList(allEmailsRead);
  }

  function allUnread() {
    const allEmailsUnread = emailList.map((email) => ({...email, status: UNREAD}));
    setEmailList(allEmailsUnread);
  }

  return (
    <section>
      <header>
        <h1>TrybeMail</h1>
      </header>
      <div>
        <h2>Caixa de Entrada</h2>
        <Controls allRead={allRead} allUnread={allUnread} />
        <EmailList emails={emailList} setEmailStatus={setEmailStatus}/>
      </div>
    </section>
  );
}

export default App;
