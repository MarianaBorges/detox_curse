import { StyleSheet, Text, View, LogBox } from 'react-native';
import { MemberProvider } from './src/context/MemberContext'
import Routes from './src/routes';

if (process.env.TEST === 'detox') {
  LogBox.ignoreAllLogs();
}

export default function App() {
  return (
    <MemberProvider>
      <Routes />
    </MemberProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
