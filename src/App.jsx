import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './components/Home';
import UserForm from './components/UserForm';
import Preview from './components/Preview';
import ProfilesList from './components/ProfilesList';

const theme = createTheme({
  palette: {
    primary: {
      main: '#656565',
    },
  },
});

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null);

  const handleCreateProfile = () => {
    setCurrentView('form');
  };

  const handleViewProfiles = () => {
    setCurrentView('profiles');
  };

  const handleSubmit = (data) => {
    setCurrentProfile(data);
    setProfiles([...profiles, data]);
    setCurrentView('preview');
  };

  const handleEdit = () => {
    setCurrentView('form');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setCurrentProfile(null);
  };

  const handleViewProfile = (profile) => {
    setCurrentProfile(profile);
    setCurrentView('preview');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <Home 
            onCreateProfile={handleCreateProfile}
            onViewProfiles={handleViewProfiles}
          />
        );
      case 'form':
        return <UserForm onSubmit={handleSubmit} />;
      case 'preview':
        return (
          <Preview 
            data={currentProfile} 
            onEdit={handleEdit}
            onBack={handleBackToHome}
          />
        );
      case 'profiles':
        return (
          <ProfilesList 
            profiles={profiles}
            onBack={handleBackToHome}
            onViewProfile={handleViewProfile}
          />
        );
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {renderView()}
    </ThemeProvider>
  );
}

export default App;