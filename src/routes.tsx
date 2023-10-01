// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { MainTitleScreen } from './components/mainTitleScreen';
import { ProjectsComponent } from './components/projects';
import { SkillsComponent } from './components/skills';
import { ContactComponent } from './components/contact';

export default function Routes() {
  return (
    <Router>
        <Route path="/" Component={MainTitleScreen} />
        <Route path="/skills" Component={SkillsComponent} />
        <Route path="/projects" Component={ProjectsComponent} />
        <Route path="/contact" Component={ContactComponent} />
    </Router>
  );
}