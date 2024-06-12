import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../../sass/buttons.scss';
import ErrorImage from '../../assets/images/error-image.jpg';

interface ModalIMGProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectImage: (imageUrl: string) => void;
}
interface UrlFromApi {
  urls: {
    small: string;
  };
  alt_description: string;
}

export function Modal_IMG({ isOpen, onClose, onSelectImage }: ModalIMGProps) {
  const [urlsToDisplay, setUrlsToDisplay] = useState<UrlFromApi[] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const setIsLoading = useState(false);
  const [error, setError] = useState('');

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
      setError('');
      setIsLoading(true);

      const apiKey = 'gcAJ2aoKrLKDnGh66xuMHMr11t_lVUYfk49uhZ-gpEs';
      const resp = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=15`,
      );
      setUrlsToDisplay(null);
      setUrlsToDisplay(resp.data.results);
    } catch (e) {
      console.log(e);
      setError('Oops! Something is wrong... Please, try later');
    }
    setIsLoading(false);
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
      {error && (
        <div>
          <img src={ErrorImage} />
          {error}
        </div>
      )}
      {urlsToDisplay == null ? (
        <div>Loading...</div>
      ) : (
        <div>
          {urlsToDisplay.length === 0 ? (
            <div>
              <span>No results</span>
            </div>
          ) : (
            urlsToDisplay.map((url, index) => (
              <img
                key={index}
                src={url.urls.small}
                alt={url.alt_description}
                onClick={() => handleSelectImage(url.urls.small)}
              />
            ))
          )}
        </div>
      )}
    </Modal>
  );
}
