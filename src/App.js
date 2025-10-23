import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
//import home from './srcImages/home.png'
import CurrentHoldings from './Pages/CurrentHoldings/CurrentHoldings.jsx';
import DividendEntries from './Pages/DividendEntries/DividendEntries.jsx';
import ClubPreferences from './Pages/ClubPreferences/ClubPreferences.jsx';
import ClubHolds from './Pages/ClubHolds/ClubHolds.jsx';
//import upGreenRight from './srcImages/UpGreenRight.png'
//import downRedRight from './srcImages/DownRedRight.png'
import RootLayout from './Pages/RootLayout.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import MagicFormula from './Pages/MagicFormula/MagicFormula.jsx';
import Banks from './Pages/Banks/Banks.jsx';
import Simulator from './Pages/Simulator/Simulator.jsx';
import WatchList from './Pages/WatchList/WatchList.jsx';
import HistoricalDividends from './Pages/HistoricalDividends/HistoricalDividends.jsx';
import StatementSpreadSheet from './Pages/StatementSpreadSheet/StatementSpreadSheet.jsx';
import SummarySpreadSheet from './Pages/SummarySpreadSheet/SummarySpreadSheet.jsx';
import { Authenticator } from '@aws-amplify/ui-react';
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(RootLayout, {}),
        children: [
            { path: '/', element: _jsx(HomePage, {}) },
            { path: '/current', element: _jsx(CurrentHoldings, {}) },
            { path: '/dividendentries', element: _jsx(DividendEntries, {}) },
            { path: '/clubpreferences', element: _jsx(ClubPreferences, {}) },
            { path: '/clubholds', element: _jsx(ClubHolds, {}) },
            { path: '/magicformula', element: _jsx(MagicFormula, {}) },
            { path: '/banks', element: _jsx(Banks, {}) },
            { path: '/watchlist', element: _jsx(WatchList, {}) },
            { path: '/historicaldividendentries', element: _jsx(HistoricalDividends, {}) },
            { path: '/simulator', element: _jsx(Simulator, {}) },
            { path: '/statmententries', element: _jsx(StatementSpreadSheet, {}) },
            { path: '/summaryentries', element: _jsx(SummarySpreadSheet, {}) }
        ]
    },
]);
function App() {
    return (_jsx(Authenticator, { children: ({ signOut }) => (_jsxs("div", { className: "App", children: [_jsx(RouterProvider, { router: router }), _jsx("button", { onClick: signOut, children: "Sign out" })] })) }));
}
export default App;
//# sourceMappingURL=App.js.map