import Draggable from 'react-draggable'
import React from 'react'

import styles from '../styles/Memo.module.css'

export default function Memo({ memoedDom }) {
  const contentRef = React.useRef(null)
  const [inited, setInited] = React.useState(false)

  console.log(memoedDom)

  React.useEffect(() => {
    const content = contentRef.current
    if (!inited && content) {
      const selection = window.getSelection()
      selection.empty()
      selection.collapse(content, 0)
      setInited(true)
    }
  })

  return (
    <Draggable
      defaultPosition={{ x: memoedDom.clientLeft, y: memoedDom.clientTop }}
    >
      <div
        ref={contentRef}
        className={styles.memo}
        style={{ minHeight: "3ex", minWidth: "2em" }}
        contentEditable={true}
      />
    </Draggable>
  )
}

