export default function PopupWithForm(props) {
    return (
        <div className={`overlay overlay_${props.name}  ${props.isOpen && 'overlay_open'}`}>
            <div className={`popup ${props.name} popup_form`} name="popupForm">
                <fieldset className="popup__set">
                    <button onClick={props.onClose} className="popup__close-button overlay__close" type="button" />
                    <h2 className="popup__title">{props.text}</h2>
                    {props.children}
                    <form className={`popup__save-button`} onSubmit={props.onSubmit}>
                    <button
                        className={`popup__save-button ${props.name}__button popup__button popup__submit`}
                        type="submit">
                        Сохранить
                    </button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}

// export default function PopupWithForm() {


//     return (
//         <>
//             <div className="overlay overlay_popup">
//                 <form className="popup profileForm popup_form" name="popupForm">
//                     <fieldset className="popup__set">
//                         <button className="popup__close-button overlay__close" type="button" />
//                         <h2 className="popup__title">Редактировать профиль</h2>
//                         <input
//                             id="popupUserName"
//                             className="popup__input popup__input_one"
//                             type="text"
//                             name="name"
//                             placeholder="Ваше имя"
//                             required=""
//                             minLength={2}
//                             maxLength={40}
//                         />
//                         <span
//                             className="popup__input-error popupUserName-error"
//                             id="errorUserName"
//                         />
//                         <input
//                             id="popupProfName"
//                             className="popup__input popup__input_two"
//                             type="text"
//                             name="profession"
//                             placeholder="Ваша профессия"
//                             required=""
//                             minLength={2}
//                             maxLength={200}
//                         />
//                         <span
//                             className="popup__input-error popupProfName-error"
//                             id="errorProfName"
//                         />
//                         <button
//                             className="popup__save-button popup__button popup__submit"
//                             type="submit"
//                         >
//                             Сохранить
//                         </button>
//                     </fieldset>
//                 </form>
//             </div>
//             <div className="overlay overlay_place">
//                 <form className="popup place popup_form" name="placeForm">
//                     <fieldset className="popup__set">
//                         <button
//                             className="place__close-button button overlay__close"
//                             type="button"
//                         />
//                         <h2 className="place__title">Новое место</h2>
//                         <input
//                             id="placeName"
//                             className="popup__input popup__input_one place__input"
//                             type="text"
//                             name="placeName"
//                             placeholder="Название"
//                             required=""
//                             minLength={2}
//                             maxLength={30}
//                         />
//                         <span
//                             className="popup__input-error placeName-error"
//                             id="errorPlaceName"
//                         />
//                         <input
//                             id="placeUrl"
//                             className="popup__input popup__input_two place__input"
//                             type="url"
//                             name="placeUrl"
//                             placeholder="Ссылка на картинку"
//                             required=""
//                         />
//                         <span
//                             className="popup__input-error placeUrl-error"
//                             id="errorPlaceUrl"
//                         />
//                         <button
//                             className="place__add-button popup__button popup__submit"
//                             type="submit"
//                         >
//                             Сохранить
//                         </button>
//                     </fieldset>
//                 </form>
//             </div>
//             <div className="overlay overlay_ask">
//                 <form className="popup ask ask_form" name="askForm">
//                     <fieldset className="ask__set popup__set">
//                         <button
//                             className="ask__close-button button overlay__close popup__close-button"
//                             type="button"
//                         />
//                         <h2 className="ask__title popup__title">Вы уверены?</h2>
//                         <button
//                             className="ask__button popup__save-button popup__button popup__submit"
//                             type="submit"
//                         >
//                             Да
//                         </button>
//                     </fieldset>
//                 </form>
//             </div>
//             <div className="overlay overlay_avatar">
//                 <form className="popup avatar avatar_form" name="avatarForm">
//                     <fieldset className="avatar__set popup__set">
//                         <button
//                             className="avatar__close-button button overlay__close popup__close-button"
//                             type="button"
//                         />
//                         <h2 className="avatar__title popup__title">Обновить аватар</h2>
//                         <input
//                             id="avatarUrl"
//                             className="popup__input avatar__input"
//                             type="url"
//                             name="avatarUrl"
//                             placeholder="Ссылка на картинку"
//                             required=""
//                         />
//                         <span
//                             className="popup__input-error avatarUrl-error"
//                             id="errorAvatarUrl"
//                         />
//                         <button
//                             className="avatar__button popup__save-button popup__button popup__submit"
//                             type="submit"
//                         >
//                             Сохранить
//                         </button>
//                     </fieldset>
//                 </form>
//             </div>
//         </>
//     );
// }