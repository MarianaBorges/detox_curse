import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.stack.routes';

export default function Routes() {
  return (
    <NavigationContainer>
        <AppRoutes/>
    </NavigationContainer>
  );
}

export { Routes }