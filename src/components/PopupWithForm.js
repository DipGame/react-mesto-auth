export default function PopupWithForm(props) {
    return (
        <div className={`overlay overlay_${props.name}  ${props.isOpen && 'overlay_open'}`}>
            <div className={`popup ${props.name} popup_form`} name="popupForm">
                <fieldset className="popup__set">
                    <button onClick={props.onClose} className="popup__close-button overlay__close" type="button" />
                    <h2 className="popup__title">{props.text}</h2>
                    {props.children}
                    <form className={`popup__save-button ${props.name}__button popup__button popup__submit`} onSubmit={props.onSubmit}>
                        <button
                            className={`popup__save-button ${props.name}__button popup__button popup__submit`}
                            type="submit">
                            {props.buttonText}
                        </button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}