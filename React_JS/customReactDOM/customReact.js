function customFunc(Element, Container){
  const elementDOM = document.createElement(Element.type);
  elementDOM.innerHTML = Element.children;
  for (const prop in Element.props) {
    if(prop == Element.children) continue;
    document.setAttribute(prop, Element.props[prop]);
  }
  Container.append(elementDOM);
}

const ReactElement = {
  type : 'a',
  props : {
    href : "https://www.google.com",
    target : "_blank"
  },
  children : "Click me to visit Here"
}

const mainContainer = document.getElementById('root');

customFunc(ReactElement, mainContainer);