import { useState, useRef, useEffect } from "react";

const Content = () => {
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
        rootMargin: "0px",
        threshold: 0.5, // 0 (fully out of view) to 1 (fully in view)
      }
    );

    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const isVisible = (element) => visibleElements.includes(element);

  return (
    <>
      <div className="info">
        <main>
          <section>
            <div
              className={`intro ${
                isVisible(document.querySelector(".info .intro"))
                  ? "show"
                  : "hidden"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <h6>Hi, This is, </h6>
            </div>
            <div
              className={`name ${
                isVisible(document.querySelector(".info .name"))
                  ? "show"
                  : "hidden"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h1>Rushikesh Thorat.</h1>
            </div>
            <div
              className={`jbspa ${
                isVisible(document.querySelector(".info .jbspa"))
                  ? "show"
                  : "hidden"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h1 className="phrase">I specialize in building webapps.</h1>
            </div>
            <div
              className={`summarry-para ${
                isVisible(document.querySelector(".info .summarry-para"))
                  ? "show"
                  : "hidden"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p>
                I&rsquo;m a web developer specializing in creating exceptional
                digital experiences with the MERN stack. Proficient in building
                accessible, human-centered web applications using React,
                Node.js, Express.js, and MongoDB. Currently focused on
                delivering high-quality, scalable solutions.
              </p>
            </div>
          </section>
          <section className="about" id="about">
            <div
              className={`about-content ${
                isVisible(document.querySelector(".about .about-content"))
                  ? ""
                  : "hidden"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="subtitle">
                <h4>About Me</h4>
                <hr className="horizontal-line" />
              </div>
              <div className="description">
                <p>
                  Hello! I&rsquo;m Rushikesh , a{" "}
                  <span className="highlight-span">web developer</span>{" "}
                  passionate about crafting exceptional digital experiences. My
                  journey in web development began in 2021 when I started
                  writing blogs, discovering the power of HTML, CSS, and
                  JavaScript. This initial curiosity evolved into a deep love
                  for building dynamic, user-friendly web applications.
                </p>
                <p>
                  I am currently pursuing a degree in{" "}
                  <span className="highlight-span">
                    Computer Science and Technology
                  </span>
                  , with a focus on{" "}
                  <span className="highlight-span">
                    integrating AI into web applications to enhance user
                    experiences
                  </span>
                  . Outside of my studies, I enjoy solving problems on platforms
                  like <span className="highlight-span">LeetCode</span>,
                  continually refining my skills in algorithm development.
                </p>
                <p>
                  Here are a few technologies I&rsquo;ve been working with
                  recently:
                </p>
                <ul className="skill-list">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Python</li>
                  <li>TensorFlow</li>
                </ul>
              </div>
            </div>
            <div
              className={`about-image ${
                isVisible(document.querySelector(".about .about-image"))
                  ? ""
                  : "hidden"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <img alt="Rushikesh Thorat" src="../../../src/assets/my.jpg" />
            </div>
          </section>
          <section className="education" id="education">
            <div
              className={`education-content ${
                isVisible(
                  document.querySelector(".education .education-content")
                )
                  ? ""
                  : "hidden"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="subtitle">
                <h4>Education</h4>
                <hr className="horizontal-line" />
              </div>
              <div className="timeline">
                <div
                  className={`badge ${
                    isVisible(
                      document.querySelector(".education .badge:nth-of-type(1)")
                    )
                      ? "show"
                      : "hidden"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <h5>2022 - 2026</h5>
                  <h6>Bachelor of Technology</h6>
                  <p>
                    Currently pursuing a Bachelor&rsquo;s degree in Computer
                    Science and Technology with a consistent CGPA of 7.42. I am
                    in my third year, gaining in-depth knowledge and practical
                    experience in various areas of computer science.
                  </p>
                </div>
                <div
                  className={`badge ${
                    isVisible(
                      document.querySelector(".education .badge:nth-of-type(2)")
                    )
                      ? "show"
                      : "hidden"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <h5>2020 - 2022</h5>
                  <h6>Higher Education</h6>
                  <p>
                    Completed my Higher Secondary Education under the
                    Maharashtra Board with a focus on science subjects. Achieved
                    a percentage of 76.50%, building a strong foundation for my
                    further studies in computer science and technology.
                  </p>
                </div>
                <div
                  className={`badge last ${
                    isVisible(
                      document.querySelector(".education .badge:nth-of-type(3)")
                    )
                      ? "show"
                      : "hidden"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <h5>2019 - 2020</h5>
                  <h6>Secondary Education</h6>
                  <p>
                    Completed my Secondary Education under the Maharashtra Board
                    with a distinction, securing 93%. Demonstrated strong
                    academic performance and a keen interest in science and
                    mathematics, paving the way for advanced studies.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="projects" id="projects">
            <div className={`projects-content`}>
              <div
                className={`subtitle  ${
                  isVisible(
                    document.querySelector(".projects-content .subtitle ")
                  )
                    ? ""
                    : "hidden"
                }`}
              >
                <h4>Things I&rsquo;ve Developed</h4>
                <hr className="horizontal-line" />
              </div>
              <div className="featured">
                <div
                  className={`featured-content  ${
                    isVisible(
                      document.querySelector(
                        ".projects-content .featured-content "
                      )
                    )
                      ? ""
                      : "hidden"
                  }`}
                >
                  <h6>Featured Project</h6>
                  <h4>NoteBook - Text Editor</h4>
                  <p>
                    A web-based text editor similar to Microsoft Word, featuring
                    basic functionalities like{" "}
                    <span className="highlight-span">bold</span>,{" "}
                    <span className="highlight-span">italic</span>,
                    <span className="highlight-span"> font changes</span> and
                    <span className="highlight-span"> color customization</span>
                    .Supports real-time file saving and dynamic{" "}
                    <span className="highlight-span">
                      client-server communication
                    </span>
                    .<br></br>
                    <div>
                      <ul className="techstack">
                        <li>React.js </li>
                        <li>Tailwind CSS </li>
                        <li>MongoDB </li>
                        <li>Node.js</li>
                      </ul>
                    </div>
                  </p>
                  <div className="button">
                    <a
                      href="https://github.com/rushikesh456thorat/NoteBook"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                        fill="#6c6c6ccc"
                      >
                        <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div
                  className={`featured-image  ${
                    isVisible(
                      document.querySelector(
                        ".projects-content .featured-image "
                      )
                    )
                      ? ""
                      : "hidden"
                  }`}
                >
                  <img alt="Project Pic" src="./image.png" />
                </div>
              </div>
              <div
                className={`noteworthy  ${
                  isVisible(
                    document.querySelector(".projects-content .noteworthy ")
                  )
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="subtitle">
                  <h4>Other Noteworthy Projects</h4>
                </div>
                <ul className="project-list">
                  <li className="project-item">
                    <div className="item-start">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="folder-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                        />
                      </svg>
                      <a href="https://github.com/rushikesh456thorat/Math-Parser" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                        fill="#6c6c6ccc"
                      >
                        <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
                      </svg></a>
                    </div>
                    <div className="title">
                      <h4>Math Equation Parser</h4>
                    </div>
                    <div className="summarry2">
                      <p>
                        A Python tool that converts mathematical equations into
                        an Abstract Syntax Tree (AST), simplifying complex
                        expressions for easier analysis and processing
                      </p>
                    </div>
                    <div>
                      <ul className="techstack">
                        <li>Python </li>
                        <li>RegEx</li>
                        <li>CLI</li>
                      </ul>
                    </div>
                  </li>
                  <li className="project-item">
                    <div className="item-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="folder-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                        />
                      </svg>
                      <a href="https://github.com/rushikesh456thorat/tornato" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                        fill="#6c6c6ccc"
                      >
                        <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
                      </svg></a>
                    </div>
                    <div className="title">
                      <h4>Small Artical Website</h4>
                    </div>
                    <div className="summarry2">
                      <p>
                        It is a static website project designed for kids,
                        featuring short, informative articles on various topics
                        like the ocean.
                      </p>
                    </div>
                    <div className="item-end">
                      <ul className="techstack">
                        <li>Html5 </li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>jquery</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="contact" id="contact">
            <div
              className={`contact-content  ${
                isVisible(document.querySelector(".contact .contact-content "))
                  ? ""
                  : "hidden"
              }`}
            >
              <div className="subtitle">
                <h4>Get In Touch</h4>
              </div>
              <div className="description">
                <p>
                  Currently, I&rsquo;m open to new opportunities and my inbox is
                  always open. Whether you have a job offer, a question, or just
                  want to connect, I&rsquo;ll do my best to respond promptly!
                </p>
              </div>
              <div className="email-button">
                <a
                  href="mailto:rushikeshthorat.me@gmail.com"
                  className="resume-button"
                >
                  Say Hello
                </a>
              </div>
            </div>
          </section>
          <footer>

              <div className="flex-row">
                <a href="https://github.com/rushikesh456thorat" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                    fill="#6c6c6ccc"
                  >
                    <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/rushikesh-thorat-dev"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                    fill="#6c6c6ccc"
                  >
                    <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/rushikeshpatill" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                    fill="#6c6c6ccc"
                  >
                    <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
                  </svg>
                </a>
                <a href="https://x.com/Rushike68703135?t=N104V3z0SKB56mxihql9JA&s=09" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                    fill="#6c6c6ccc"
                  >
                    <path d="M 32 6 C 26.568583 6 22.160643 10.388731 22.042969 15.792969 C 17.240727 15.216998 14.113589 13.421507 12.195312 11.652344 C 10.067982 9.6903754 9.3945312 7.9472656 9.3945312 7.9472656 A 1.50015 1.50015 0 0 0 6.8007812 7.5996094 C 6.8007812 7.5996094 5 10 5 13.5 C 5 15.500985 5.6317952 16.981554 6.3847656 18.236328 C 6.3570276 18.223338 6.1699219 18.158203 6.1699219 18.158203 A 1.50015 1.50015 0 0 0 4.0058594 19.636719 C 4.0058594 19.636719 4.5832039 23.856843 8.5507812 26.941406 L 8.1367188 27.044922 A 1.50015 1.50015 0 0 0 7.1972656 29.244141 C 7.1972656 29.244141 7.8700527 30.382221 9.2792969 31.580078 C 10.11485 32.290298 11.34227 33.023169 12.789062 33.701172 C 11.012271 34.35044 8.362818 35 4.5 35 A 1.50015 1.50015 0 0 0 3.3710938 37.488281 C 3.3710938 37.488281 4.5173251 38.751002 6.7832031 39.849609 C 9.0490812 40.948217 12.539474 42 17.5 42 C 26.219697 42 32.484656 37.817151 36.394531 32.515625 C 40.304407 27.214099 42 20.861111 42 16 C 42 15.691547 41.980739 15.387437 41.953125 15.085938 C 44.064371 13.051602 44.856626 11.522235 44.894531 11.447266 C 45.084531 11.066266 45.01375 10.608688 44.71875 10.304688 C 44.42475 9.9996875 43.969031 9.9137969 43.582031 10.091797 L 43.419922 10.166016 C 43.280922 10.230016 43.141953 10.294422 43.001953 10.357422 C 43.408953 9.7084219 43.730125 9.014875 43.953125 8.296875 C 44.077125 7.900875 43.943234 7.4669375 43.615234 7.2109375 C 43.287234 6.9549375 42.835469 6.9275312 42.480469 7.1445312 C 41.258221 7.8873594 40.086652 8.40739 38.867188 8.7558594 C 37.072578 7.0534724 34.656873 6 32 6 z M 32 9 C 35.883178 9 39 12.116822 39 16 C 39 20.138889 37.445593 26.035901 33.980469 30.734375 C 30.515344 35.432849 25.280303 39 17.5 39 C 13.7348 39 11.230189 38.318942 9.3535156 37.582031 C 11.319341 37.276755 13.011947 36.869367 14.228516 36.398438 C 16.338182 35.581792 17.476563 34.638672 17.476562 34.638672 A 1.50015 1.50015 0 0 0 16.863281 32.044922 C 14.140556 31.364241 12.394328 30.263307 11.298828 29.345703 L 12.863281 28.955078 A 1.50015 1.50015 0 0 0 13.039062 26.099609 C 9.7939415 24.851486 8.4312292 23.086373 7.734375 21.607422 C 8.5823538 21.782967 9.3718961 22 10.5 22 A 1.50015 1.50015 0 0 0 11.169922 19.158203 C 11.169922 19.158203 8 17.7 8 13.5 C 8 12.745947 8.2088435 12.268355 8.3613281 11.697266 C 8.884507 12.400354 9.3156815 13.07859 10.160156 13.857422 C 12.734824 16.231954 16.990366 18.653154 23.419922 18.998047 A 1.50015 1.50015 0 0 0 25 17.5 L 25 16 C 25 12.116822 28.116822 9 32 9 z"></path>
                  </svg>
                </a>
              </div>
            
            <p>
              <a>Built By Rushikesh Thorat</a>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Content;
