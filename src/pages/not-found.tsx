import { Container, Box, Button } from '@mui/material';

import Link from '../components/atoms/link';

export default function NotFound() {
  return (
    <Container>
      <Box textAlign="center">
        <h1>404</h1>
        <h2>Page not found.</h2>
        <p>
          The page you are looking for does not exist. But you can click the button below to go back
          to the homepage.
        </p>
        <Link to="/">
          <Button variant="contained">HOME</Button>
        </Link>
      </Box>
    </Container>
  );
}
