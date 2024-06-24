import Content from "./content"
import Left from "./left"
import Navigation from "./navigation"
import Right from "./right"


const MainPage = () =>{
   return(
        <>
        
            <div className="layout-main">
                
            <Navigation/>
                <Left/>
                <Right/>
                <Content/>
            </div>

        </>
    )
}

export default MainPage