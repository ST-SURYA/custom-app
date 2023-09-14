import "./App.css";
import { Accordion } from "./Components/AccordionComponents";
function App() {
  return (
    <div>
      <div className="title">Accordion 1</div>
      <Accordion.Root defaultValue="1" className="main">
        <Accordion.Item value="1">
          <Accordion.Trigger>
            <div>Accordion 1</div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div>Accordion content 1</div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger>
            <div>Accordion 2</div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div>Accordion content 2</div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <div className="title">Accordion 2</div>
      <Accordion.Root>
        <Accordion.Item value="4">
          <Accordion.Trigger>
            <div>Accordion 4</div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div>Accordion content 4</div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="5">
          <Accordion.Trigger>
            <div>Accordion 5</div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div>Accordion content 5</div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="6">
          <Accordion.Trigger>
            <div>Accordion 6</div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div>Accordion content 6</div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="7">
          <Accordion.Trigger>
            <div>Accordion 7</div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div>Accordion content 7</div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

export default App;
