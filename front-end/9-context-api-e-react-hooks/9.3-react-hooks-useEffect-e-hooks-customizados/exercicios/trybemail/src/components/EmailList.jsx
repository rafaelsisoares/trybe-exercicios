import React from "react";
import { READ, UNREAD } from "../utils/consts";

export default function EmailList({ emails, setEmailStatus }) {
  return (
    <div>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>
            <p className={email.status === READ ? 'email-read' : 'email-unread'}>{email.title}</p>
            <button type="button" onClick={() => setEmailStatus(email.id, READ)}>Marcar como lido</button>
            <button type="button" onClick={() => setEmailStatus(email.id, UNREAD)}>Marcar como não lido</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
