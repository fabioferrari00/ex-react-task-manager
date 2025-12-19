import { createPortal } from 'react-dom'

const Modal = ({title, content, show, onClose, onConfirm, confirmText = "Conferma"}) => {

    if(!show){
        return null
    }

  return createPortal(
    <div className="modale-overlay">
        <div className="modale">
            <div className="modale-header">
                <h2 className="modale-title">{title}</h2>
            </div>
            <div className="modale-content">
                <p>{content}</p>
            </div>
            <div className="modale-footer">
                <button onClick={onClose} className="modale-cancel">Annulla</button>
                <button onClick={onConfirm} className="modale-confirm">Conferma</button>
            </div>
        </div>
    </div>
    ,
    document.body
  )
}

export default Modal
