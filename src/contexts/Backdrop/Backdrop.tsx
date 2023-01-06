import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Backdrop.module.scss';

type ContextType = {
  setShow: (show: boolean) => void;
  show: boolean;
};

const BackdropContext = createContext<ContextType>({
  setShow: () => {},
  show: false,
});

const Backdrop = ({ onClick }: { onClick: () => void }) => {
  const node = useMemo(() => document.querySelector('#backdrop'), []);
  if (!node) return <></>;
  return (
    <>
      {createPortal(
        <div onClick={() => onClick()} className={styles.backdrop} />,
        node
      )}
    </>
  );
};

const BackdropProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  const handleBackdropClick = () => {
    return setShow(false);
  };

  useEffect(() => {
    const $body = document.querySelector('body');
    if (!$body) return;
    if (show) {
      $body.classList.add('block-scroll');
    } else $body.classList.remove('block-scroll');
  }, [show]);

  return (
    <>
      <BackdropContext.Provider
        value={{
          show,
          setShow: (isShow: boolean) => {
            setShow(isShow);
          },
        }}
      >
        {children}
      </BackdropContext.Provider>
      {show && <Backdrop onClick={handleBackdropClick} />}
    </>
  );
};

export const useBackdrop = () => {
  return useContext(BackdropContext);
};

export default BackdropProvider;
