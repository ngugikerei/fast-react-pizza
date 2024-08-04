import { useState } from 'react';
import './App.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((ques, i) => (
        <AccordionItem
          openStat={curOpen}
          onOpen={setCurOpen}
          number={i}
          title={ques.title}
          text={ques.text}
          key={i}
        />
      ))}
    </div>
  );
}

function AccordionItem({ openStat, onOpen, number, title, text }) {
  const isOpen = number === openStat;

  function handleToggle() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div className={isOpen ? 'item open' : 'item'} onClick={handleToggle}>
      <p className="number">{number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
export default App;
