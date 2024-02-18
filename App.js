import {createElement as ce} from 'react';
import ReactDOM from 'react-dom/client'; 

const li1 = ce(
  "li",
  {
    id: "li",
    key: "2000",
  },
  "hello1"
);
const li2 = ce(
  "li",
  {
    id: "li",
    key: "2001",
  },
  "hello2"
);
const li3 = ce(
  "li",
  {
    id: "thirdli",
    key: "2002",
  },
  "hello3"
);
const li4 = ce(
  "li",
  {
    id:"fourth",
    key: "1999",
  },
  "hello4"
)

const ul = ce(
  "ul",
  {
    id:"ulist",
  
  },
  li4,
  li1,
  li2,
  li3
);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(ul);
