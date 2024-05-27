import React, { useContext } from 'react';

import { ForecastContext } from '../../context/ForecastContext';

import classes from './Modal.module.scss';
import ModalTemplate from './ModalTemplate';

const Modal: React.FC = () => {
  const { setIsModalOpen } = useContext(ForecastContext);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={classes['Dark-background']} onClick={closeModal} />
      <div className={classes.Centered}>
        <div className={classes.Modal}>
          <button className={classes.closeBtn} onClick={closeModal}>
            Close
          </button>
          <ModalTemplate />
        </div>
      </div>
    </>
  );
};

export default Modal;
