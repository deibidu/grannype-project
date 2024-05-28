import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../../sass/buttons.scss';

interface ModalIMGProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectImage: (imageUrl: string) => void;
}

export function Modal_IMG({ isOpen, onClose, onSelectImage }: ModalIMGProps) {
  const [urlsToDisplay, setUrlsToDisplay] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function getInitialImages() {
      try {
        const apiKey = 'gcAJ2aoKrLKDnGh66xuMHMr11t_lVUYfk49uhZ-gpEs';
        const resp = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=food&per_page=15`,
        );
        setUrlsToDisplay(resp.data.results);
      } catch (e) {
        console.log(e);
      }
    }
    getInitialImages();
  }, []);

  const handleSearchImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const apiKey = 'gcAJ2aoKrLKDnGh66xuMHMr11t_lVUYfk49uhZ-gpEs';
      const resp = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=15`,
      );
      setUrlsToDisplay(resp.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCloseModal = () => {
    onClose();
  };

  const handleSelectImage = (imageUrl: string) => {
    onSelectImage(imageUrl);
    handleCloseModal();
  };

  return (
    <Modal className={''} isOpen={isOpen} onRequestClose={handleCloseModal}>
      <form className={'modal-content'} onSubmit={handleSearchImage}>
        <input
          className="input-modal"
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search here"
        />
        <div className="modal-btn-div">
          <button className="button__primary-grey" type="submit">
            Search
          </button>
          <button className="button__secondary-grey" type="button" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </form>
      {urlsToDisplay.length > 0 && (
        <div>
          {urlsToDisplay.map((url, index) => (
            <img
              key={index}
              src={url.urls.small}
              alt={url.alt_description}
              onClick={() => handleSelectImage(url.urls.small)}
            />
          ))}
        </div>
      )}
    </Modal>
  );
}
