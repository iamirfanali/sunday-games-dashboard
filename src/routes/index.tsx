import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from '../pages';
import Game from '../pages/game';
import NotFound from '../pages/not-found';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="game/:id" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
