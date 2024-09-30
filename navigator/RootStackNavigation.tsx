import Home from '../screens/Home';

export type PramaList = {
  Home: undefined;
  Details: undefined;
};

export default function RootStackNavigation() {
  return <RootStackNavigation.Screen name="Home" components={Home} />;
}
