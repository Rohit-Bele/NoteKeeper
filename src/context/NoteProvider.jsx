import React, { useState } from 'react'
import  NoteContext  from './NoteContext'


function NoteProvider({children}) {

    const [notes,setnotes] = useState([])

  return (
    <NoteContext.Provider value={{notes,setnotes}}>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteProvider