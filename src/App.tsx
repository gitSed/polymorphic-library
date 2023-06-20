import { Text } from './components';

function App() {
  return (
    <Text as="div">
      <Text as="span">Span Component</Text>
      <Text as="p">Paragraph Component</Text>
      <Text as="a" href="www.google.com" color="red">
        Unknow
      </Text>
    </Text>
  );
}

export default App;
