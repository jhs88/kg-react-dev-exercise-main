import Wysiwyg from 'Common/components/Wysiwyg/Wysiwyg';
import { SKIN_NAMES } from 'Common/components/Wysiwyg/Wysiwyg.interfaces';
import Accordion from 'Common/components/Accordion/Accordion';
import { AC_SKIN_NAMES } from 'Common/components/Accordion/Accordion.interfaces';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Wysiwyg skin={SKIN_NAMES.DEFAULT_SKIN} />} />
        <Route
          path="/accordion"
          element={<Accordion skin={AC_SKIN_NAMES.DEFAULT_SKIN} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
