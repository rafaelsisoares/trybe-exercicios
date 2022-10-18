import React from "react";

export default function Controls({ allRead, allUnread }) {
  return (
    <div>
      <button type="button" onClick={allRead}>Marcar todos como lidos</button>
      <button type="button" onClick={allUnread}>Marcar todos como não lidos</button>
    </div>
  );
}
