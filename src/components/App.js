import { useState, useEffect } from 'react';
import React from 'react';
import { api } from '../utils/Api.js';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

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
        // console.log(data);
      })
      .catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    api.getAllCards()
      .then((data) => {
        const newCards = data.map((card) => {
          return card
        })

        setCards(newCards)
      })
      .catch((err) => console.log(err))
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCard(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        console.log(newCard);
        console.log('hi api');
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser({ name, about }) {
    api.setUserInfo({
      name: name,
      about: about,
    })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
  }

  function handleCardDelete(card) {
    api.deleteCards(card._id)
      .then((data) => {
        setCards(prevState => prevState.filter((item) => item._id !== card._id))
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatar) {
    console.log(avatar);
    api.createNewAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
    closeAllPopups();
  }

  function handleAddPlaceSubmit({ name, link }) {
    api.createNewCard({
      name: name,
      link: link
    })
      .then((data) => {
        const newCard = data;
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
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
      <div className="body">
        <div className="page">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleEditPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} cards={cards} />
          <Footer />

        </div>
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

        <AddPlacePopup onUpdatePlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
      <template className="placeTemplate" id="placeCardTemplate" />
    </CurrentUserContext.Provider>
  );
}

export default App;