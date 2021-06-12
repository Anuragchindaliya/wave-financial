import { useEffect } from "react";
import { useLocation} from "react-router-dom"

function ScrollToTop() {
    
    const {pathname}= useLocation();

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return null
    
}
export default ScrollToTop;

// import { useEffect } from "react";

// function ScrollToTopOnMount() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return null;
// }

// // Render this somewhere using:
// // <Route path="..." children={<LongContent />} />
// function LongContent() {
//   return (
//     <div>
//       <ScrollToTopOnMount />

//       <h1>Here is my long content page</h1>
//       <p>...</p>
//     </div>
//   );
// }
