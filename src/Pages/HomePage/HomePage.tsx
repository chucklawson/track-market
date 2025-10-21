

import {useEffect, useState} from "react";

function HomePage(){
    const [headerValue,setHeaderValue] = useState('Howdy !')
    useEffect(() => {
        document.title = "Home"
     }, []);

    //setHeaderValue('Howdy !');

return(
    
    <div className="text-center">
        <header className="bg-green-100 text-green-600 text-3xl font-bold h-20 justify-items-center p-5">
            <div>
                {headerValue}
            </div> 
        </header>

      </div>
    )
}
export default HomePage;