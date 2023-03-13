import { useState, useEffect } from 'react';

import React from 'react';
import { api } from '../utils/Api.js';

import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = React.useState({
    avatar: '',
    name: '',
    about: '',
  });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
        console.log(data);
      })
  }, []);

  useEffect(() => {
    api.getAllCards()
      .then((data) => {
        const newCards = data.map((card) => {
          return card
        })
        setCards(newCards)
      })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCard(card._id, isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        console.log(newCard);
        console.log('hi api');
    });
} 

function handleUpdateUser() {
  api.setUserInfo()
  .then((res) => {
    console.log(res);
  })
}

function handleCardDelete(card) {
  api.deleteCards(card._id)
    .then((data) => {
      const newCard = cards.filter((item) => item._id !== card._id);
        setCards(newCard);
    });
}

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <body className="body">
        <div className="page">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleEditPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike} 
          onCardDelete={handleCardDelete} cards={cards} />
          <Footer />
          
        </div>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} /> 

          <PopupWithForm onUpdateUser={handleUpdateUser} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name='place' text='Новое место'>
            <input
              id="placeName"
              className="popup__input popup__input_one place__input"
              type="text"
              name="placeName"
              placeholder="Название"
              required=""
              minLength={2}
              maxLength={30}
            />
            <span
              className="popup__input-error placeName-error"
              id="errorPlaceName"
            />
            <input
              id="placeUrl"
              className="popup__input popup__input_two place__input"
              type="url"
              name="placeUrl"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span
              className="popup__input-error placeUrl-error"
              id="errorPlaceUrl"
            />
          </PopupWithForm>
          <PopupWithForm  isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name='avatar' text='Обновить аватар'>
            <input
              id="avatarUrl"
              className="popup__input avatar__input"
              type="url"
              name="avatarUrl"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span
              className="popup__input-error avatarUrl-error"
              id="errorAvatarUrl"
            />
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </body>
      <template className="placeTemplate" id="placeCardTemplate" />
    </CurrentUserContext.Provider>
  );
}

export default App;
