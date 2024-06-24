import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const WelcomePage = ({ onAnimationEnd }) => {
  const endOfLetterRef = useRef(null);
  const nameContainerRef = useRef(null);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const handleLastLetterAnimationEnd = () => {
      setReverse(true);
    };

    const handleReverseAnimationEnd = () => {
      if (reverse) {
        onAnimationEnd();
      }
    };

    const endOfLetter = endOfLetterRef.current;
    endOfLetter.addEventListener("animationend", handleLastLetterAnimationEnd);

    const nameContainer = nameContainerRef.current;
    nameContainer.addEventListener("animationend", handleReverseAnimationEnd);

    return () => {
      endOfLetter.removeEventListener(
        "animationend",
        handleLastLetterAnimationEnd
      );
      nameContainer.removeEventListener(
        "animationend",
        handleReverseAnimationEnd
      );
    };
  }, [onAnimationEnd, reverse]);

  return (
    <div className="conatainer">
      {" "}
      <div
        ref={nameContainerRef}
        className={`nameContainer ${reverse ? "reverse" : ""}`}
      >
        <span>R</span>
        <span>U</span>
        <span>S</span>
        <span>H</span>
        <span>I</span>
        <span>K</span>
        <span>E</span>
        <span>S</span>
        <span>H</span>
        <span>&nbsp;&nbsp;</span>
        <span>T</span>
        <span>H</span>
        <span>O</span>
        <span>R</span>
        <span>A</span>
        <span ref={endOfLetterRef}>T</span>
      </div>
    </div>
  );
};

export default WelcomePage;
