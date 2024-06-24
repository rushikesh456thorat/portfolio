import { useEffect,useRef, useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const observerRef = useRef(null);
  const [visibleElements, setVisibleElements] = useState([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => [...prev, entry.target]);
          } else {
            //
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5, // 0 (fully out of view) to 1 (fully in view)
      }
    );

    const elements = document.querySelectorAll('.hidden-nav');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const isVisible = (element) => visibleElements.includes(element);
      

  const handleClick = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo"><a href="/">Rushikesh Thorat</a></div>
          <div className="nav-list">
            <ol>
              <li className={`${isVisible(document.querySelector('.nav-list li')) ? 'show' : 'hidden-nav'}`} style={{transitionDelay:'100ms'}}>
                <a href="#about">About</a>
              </li>
              <li className={`${isVisible(document.querySelector('.nav-list li')) ? 'show' : 'hidden-nav'}`} style={{transitionDelay:'200ms'}}>
                <a href="#education">Education</a>
              </li>
              <li className={`${isVisible(document.querySelector('.nav-list li')) ? 'show' : 'hidden-nav'}`} style={{transitionDelay:'300ms'}}>
                <a href="#projects">Projects</a>
              </li>
              <li className={`${isVisible(document.querySelector('.nav-list li')) ? 'show' : 'hidden-nav'}`} style={{transitionDelay:'400ms'}}>
                <a href="#contact">Contact</a>
              </li >
            </ol>
            <a className={`resume-button ${isVisible(document.querySelector('.nav-list .resume-button')) ? 'show' : 'hidden-nav'}`} style={{transitionDelay:'500ms'}} href="../../../src/assets/resume.pdf">
              Resume
            </a>
          </div>
          <div className="nav-panel">
            <div>
              <button className="nav-open" onClick={handleClick}>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                  </svg>
                )}
              </button>
              <aside className={`side-menu ${isOpen ? "open" : "close"}`}>
                <ol>
                  <li onClick={handleClick}>
                    <a href="#about">About</a>
                  </li>
                  <li onClick={handleClick}>
                    <a href="#education">Education</a>
                  </li>
                  <li onClick={handleClick}>
                    <a href="#projects">Projects</a>
                  </li>
                  <li onClick={handleClick}>
                    <a href="#contact">Contact</a>
                  </li>
                </ol>
                <a className="resume-button" href="/resume">
                  Resume
                </a>
              </aside>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
