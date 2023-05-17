// <------ 1. Basic Overview ----->

// console.log(document);
// console.log(typeof document); Type is object
// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.styleSheets);
// console.log(document.childNodes);
// console.log(document.all);
// document.all[12].style.fontSize = "80px"; We shouldn't do this

// <------ 2. Accessing DOM elements through ID, Class, Tagname, querySelector, etc ----->

// a. THROUGH ID
// let header = document.getElementById("header");
// console.log("text content ->", header.textContent);
// console.log("inner text ->", header.innerText);
// console.log("inner HTML ->", header.innerHTML);
// header.style.color = "orangered";
// console.log(header);

// b. THROUGH CLASS
// let items = document.getElementsByClassName("item");
// items[1].style.color = "red";
// for(let item of items){
//     item.style.color = "blueviolet";
// };
// console.log(items);

// c. THROUGH Query and Query-all
// let onItem = document.querySelector(".item");
// let items = document.querySelectorAll(".item");
// console.log(items.children);
// console.log(onItem);
// console.log(items);

// d. THROUGH Tagname
// let items = document.getElementsByTagName("li");
// console.log(items);

// <------ 3. Accessing parent from child & child from parent elements ----->

// a. parent to children
// let ULitems = document.querySelector("#items");
// console.log(ULitems);
// console.log(ULitems.children);
// console.log(ULitems.querySelectorAll("#item-id"));

// b. children to parent
// const children = document.querySelector("#item-id");
// console.log(children.parentElement);
// console.log(children.closest("#items"));

// c. children to sibling
// const children = document.querySelector(".item");
// console.log(children);
// console.log(children.nextSibling);
// console.log(children.previousSibling);

// console.log(children.firstElementChild);
// console.log(children.firstChild);

// <------ 4. Understanding Node, ParentNode, ChildNode, and TextNode ----->
// const bodyElem = document.body;
// console.log(rootElem.parentNode); // document
// console.log(rootElem.parentElement); // null
// console.log(bodyElem.children);
// console.log(bodyElem.childNodes);
// console.log(bodyElem.firstChild);
// console.log(bodyElem.firstElementChild);
// console.log(bodyElem.lastChild);
// console.log(bodyElem.lastElementChild);
// console.log(bodyElem.nextSibling);
// console.log(bodyElem.nextElementSibling);
// console.log(bodyElem.previousSibling);
// console.log(bodyElem.previousElementSibling);

// <------ 5. Creating Element with JS ----->
// let divElement = document.createElement("div");
// divElement.innerText = "This element is added by JS";
// let parent = document.getElementsByClassName("container")[0];
// let todoList = parent.getElementsByClassName('todo-list')[0];
// parent.insertBefore(divElement, todoList);

// todoList.appendChild(divElement);
// todoList.append(divElement);

/* appendChild & append looks same, right? Almost, but there is a little difference.
First difference is append can add string but appendChild gives error. For example:
    element.append("Hello world") // it works
    element.appendChild("Hello world") // it doesn't work

Second difference is appendChild can return the element but append does not. For Example:
    const a = element.appendChild(elem) // returns the element
    const b = element.append(elem) // returns undefined

Third difference is append can take multiple arguments but appendChild only takes one argument.
    element.append(elem1, elem2, elem3) // It will add all elements
    element.appendChild(elem1, elem2, elem3) // It will only add the first element ie elem1
*/