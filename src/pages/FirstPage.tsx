import UserForm from '../components/UserForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FirstPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        First Page
      </Typography>
      <UserForm />
    </Box>
  );
};

export default FirstPage;
