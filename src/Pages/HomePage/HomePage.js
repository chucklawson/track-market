import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
function HomePage() {
    //const [headerValue,setHeaderValue] = useState('Howdy !')
    const headerValue = 'Howdy !';
    useEffect(() => {
        document.title = "Home";
    }, []);
    //setHeaderValue('Howdy !');
    return (_jsx("div", { className: "text-center", children: _jsx("header", { className: "bg-green-100 text-green-600 text-3xl font-bold h-20 justify-items-center p-5", children: _jsx("div", { children: headerValue }) }) }));
}
export default HomePage;
//# sourceMappingURL=HomePage.js.map