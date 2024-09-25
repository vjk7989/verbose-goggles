import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from './components/landing-page/LandingPage';
import PagesContainer from "./components/pages/PagesContainer";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Eap from "./components/pages/eap/Eap";
import SetReminders from './components/pages/set-reminders/SetReminders';
import RelaxingActivities from "./components/pages/relaxing-activities/RelaxingActivities";
import DailyActivities from "./components/pages/daily-activities/DailyActivities";
import EducationalResources from "./components/pages/educational-resources/EducationalResources";
import Achievements from "./components/pages/achievements/Achievements";
import Leaderboard from "./components/pages/leaderboard/Leaderboard";
import Profile from "./components/pages/profile/Profile";
import './App.scss';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pages/" element={<PagesContainer />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="eap" element={<Eap />} />
                    <Route path="set-reminders" element={<SetReminders />} />
                    <Route path="relaxing-activities" element={<RelaxingActivities />} />
                    <Route path="daily-activities" element={<DailyActivities />} />
                    <Route path="educational-resources" element={<EducationalResources />} />
                    <Route path="achievements" element={<Achievements />} />
                    <Route path="leaderboard" element={<Leaderboard />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                {/* Redirect all other paths to dashboard */}
                <Route path="*" element={<Navigate to="/pages/dashboard" />} />
            </Routes>
        </HashRouter>
    );
}

export default App;