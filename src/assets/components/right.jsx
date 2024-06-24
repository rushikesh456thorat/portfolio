import { useEffect,useRef, useState } from "react";


const Right = () =>{

    const observerRef = useRef(null);
    const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
             setIsHidden(true)
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5, // 0 (fully out of view) to 1 (fully in view)
      }
    );

    // Start observing the target element
    observerRef.current.observe(document.querySelector('.hidden-right'));

    // Clean up the observer
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); 
      

    return(
        <>
         <div className={`email-bar ${isHidden ? '':'hidden-right'}`}>
            <div className="flex-column">
                <hr className="vertical-line h"/>
                <a className="email-link" href="mailto:rushikeshthorat.me@gmail.com">rushikeshthorat.me@gmail.com</a>
                
            </div>
         </div>
        
        </>
    )

}

export default Right