import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer__nav}>
          <div className={styles['footer__nav-text']}>
            <h2>AR Shakir</h2>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </p>
          </div>
          <div className={styles['footer__nav-links']}>
            <div>
              <ul className="unstyle">
                <li>
                  <h3>Company</h3>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="unstyle">
                <li>
                  <h3>Product</h3>
                </li>
                <li>
                  <a href="/">Invoicing Platform</a>
                </li>
                <li>
                  <a href="/">Accounting Plateform</a>
                </li>
                <li>
                  <a href="/">Create Proposal</a>
                </li>
                <li>
                  <a href="/">Contracts</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="unstyle">
                <li>
                  <h3>Resources</h3>
                </li>
                <li>
                  <a href="/">Proposal Template</a>
                </li>
                <li>
                  <a href="/">Invoice Template</a>
                </li>
                <li>
                  <a href="/">Tuturoial</a>
                </li>
                <li>
                  <a href="/">How to write a contract</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <div className="container">
          <div className={styles['footer__copyright-inner']}>
            <p>
              2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of
              Services
            </p>
            <p>Supported by Microsoft Startup</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
