
// Write TypeScript code!
console.clear()
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>RXJS Filter - fromEvent -fire -click or dblClick Eventt</h1>`;
import { fromEvent,merge } from 'rxjs';
import { map, filter } from 'rxjs/operators';
// common function to display event
const dipslayEvent = (event2,message) => {
   console.log(message, ' ', event2.type);
   appDiv.innerHTML += '<h5> '+ message + ' '+ event2.type +' <h5>'
}
//create observable that emits dblclick events
const source = fromEvent(document, 'dblclick');
//create observable that emits click events
const source1 = fromEvent(document, 'click');
// mergring the observales   
const event = merge(source,source1);
event.subscribe(event1 => dipslayEvent(event1,'event firred'))
//filterout the event that are requied
const example = event.pipe(filter(event => event.type === 'dblclick'));
// only subsacribed to those event that are required
const subscribe = example.subscribe(event1 => dipslayEvent(event1,'event as per required'));