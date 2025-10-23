import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Tab from '../Tab/Tab.jsx';
import home from '../../srcImages/home.png';
import statistics from '../../srcImages/statistics.png';
import clipboard from '../../srcImages/clipboard.png';
//import math from '../../srcImages/math.ico'
import banks from '../../srcImages/bank.png';
import robot from '../../srcImages/robot.png';
import budget from '../../srcImages/budget.png';
function MainNavigation() {
    return (_jsx("header", { children: _jsx("div", { className: "bg-gray-100 px-1 py-0.5 h-12", children: _jsx("nav", { children: _jsx("ul", { className: 'flex', children: _jsxs("div", { className: "left md:w-3/4 sm:w-1/3 flex", children: [_jsx(Tab, { pagePath: '/', tabImage: home, tabText: 'Home', tabWidth: '125px' }), _jsx(Tab, { pagePath: '/current', tabImage: statistics, tabText: 'Current', tabWidth: '135px' }), _jsx(Tab, { pagePath: '/dividendentries', tabImage: statistics, tabText: 'Div Entries', tabWidth: '190px' }), _jsx(Tab, { pagePath: '/clubpreferences', tabImage: clipboard, tabText: 'Club Buys', tabWidth: '185px' }), _jsx(Tab, { pagePath: '/clubholds', tabImage: clipboard, tabText: 'Club Holds', tabWidth: '185px' }), _jsx(Tab, { pagePath: '/banks', tabImage: banks, tabText: 'Financial', tabWidth: '150px' }), _jsx(Tab, { pagePath: '/watchlist', tabImage: budget, tabText: 'Watchlist', tabWidth: '185px' }), _jsx(Tab, { pagePath: '/statmententries', tabImage: budget, tabText: 'Statements', tabWidth: '185px' }), _jsx(Tab, { pagePath: '/historicaldividendentries', tabImage: budget, tabText: 'Dividends', tabWidth: '185px' }), _jsx(Tab, { pagePath: '/summaryentries', tabImage: robot, tabText: 'Summary', tabWidth: '185px' })] }) }) }) }) }));
}
export default MainNavigation;
//# sourceMappingURL=MainNavigation.js.map