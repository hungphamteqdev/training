import { useEffect, useState } from 'react';
import { useBackdrop } from '../../contexts/Backdrop/Backdrop';
import avatar1 from '../../images/avatar-1.png';
import downArrow from '../../images/downarrow.png';
import headerCtaBanner from '../../images/header-cta-banner.png';
import playButton from '../../images/play-button.png';
import BalanceChart from '../BalanceChart/BalanceChart';
import MoneyReceived from '../MoneyReceived/MoneyReceived';
import StatusChart from '../StatusChart/StatusChart';
import styles from './Header.module.scss';

const NavList = () => {
  return (
    <ul className="unstyle">
      <li>
        <a href="/" title="Product">
          Product
          <img src={downArrow} alt="" />
        </a>
      </li>
      <li>
        <a href="/" title="Template">
          Template
          <img src={downArrow} alt="" />
        </a>
      </li>
      <li>
        <a href="/" title="Blog">
          Blog
        </a>
      </li>
      <li>
        <a href="/" title="Pricing">
          Pricing
        </a>
      </li>
    </ul>
  );
};

const MobileMenu = () => {
  const [show, setShow] = useState(false);

  const active = show ? styles['header__mobile-menu-nav--active'] : '';
  const { show: isBackdropShow, setShow: setBackdrop } = useBackdrop();

  useEffect(() => {
    if (!isBackdropShow) {
      setShow(false);
    }
  }, [isBackdropShow]);

  return (
    <div className={styles['header__mobile-menu']}>
      <div
        className={styles['header__mobile-menu-icon']}
        onClick={() => {
          setShow(true);
          setBackdrop(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <nav className={`${styles['header__mobile-menu-nav']} ${active}`}>
        <div
          className={styles['header__mobile-menu-icon']}
          onClick={() => {
            setShow(false);
            setBackdrop(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <NavList />
        <hr />
        <div className={styles['header__mobile-menu-actions']}>
          <a href="/" title="Sign In" className="button button--rounded-md">
            Sign In
          </a>
          <a
            href="/"
            title="Start Free"
            className="button button--blue button--rounded-md"
          >
            Start Free
          </a>
        </div>
      </nav>
    </div>
  );
};

const Topbar = () => {
  return (
    <div className={styles.header__topbar}>
      <div className="container">
        <div className={styles['header__topbar-inner']}>
          <MobileMenu />
          <p>ar shakir</p>
          <nav className={styles['header__topbar-nav']}>
            <NavList />
          </nav>
          <div className={styles['header__topbar-actions']}>
            <a href="/" title="Sign In" className="button button--rounded-md">
              Sign In
            </a>
            <a
              href="/"
              title="Start Free"
              className="button button--blue button--rounded-md"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <div className={styles.header__cta}>
      <div className="container">
        <div className={styles['header__cta-inner']}>
          <div className={styles['header__cta-content']}>
            <h1>Managing business payments has never been easier</h1>
            <p>
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
            <div className={styles['header__cta-actions']}>
              <a href={'/'} className="button button--blue button--rounded-lg">
                Get Started
              </a>
              <a href="/">
                <div>
                  <img src={playButton} alt="" />
                </div>
                See How It Works
              </a>
            </div>
          </div>
          <div className={styles['header__cta-banner']}>
            <img
              src={headerCtaBanner}
              alt="Managing business payments has never been easier
"
            />
            <div className={styles['header__cta-noti']}>
              <MoneyReceived
                avatarSrc={avatar1}
                sender={'AR Shakir'}
                amount={'28,900'}
              />
            </div>
            <div className={styles['header__cta-noti']}>
              <StatusChart />
            </div>
            <div className={styles['header__cta-noti']}>
              <BalanceChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Topbar />
      <CTA />
    </header>
  );
};

export default Header;
