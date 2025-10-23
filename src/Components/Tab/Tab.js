import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
//const Tab = props => {
//<img src={props.tabImage} className="inline-block w-7 h-7 p-1 mx-2 my-1" alt=""></img>
const Tab = (props) => {
    //console.log('props.pagePath: ' + props.pagePath)
    return (_jsx("li", { className: 'font-bold', style: { width: props.tabWidth }, children: _jsx(NavLink, { to: props.pagePath, style: ({ isActive }) => ({ color: isActive ? 'Coral' : 'DimGrey' }), children: _jsxs("div", { className: 'bg-gray-100 mx-2 p-1 rounded-md hover:text-black\r\n                                    transition ease-in-out delay-150 hover:-translate-y-1\r\n                                    hover:scale-110 hover:bg-green-200 duration-300', children: [_jsx("img", { src: props.tabImage, className: "inline-block w-7 h-7 p-1 mx-2 my-1", alt: "" }), _jsx("span", { className: 'inline-block', children: props.tabText })] }) }) }));
};
export default Tab;
//# sourceMappingURL=Tab.js.map