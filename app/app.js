import {Character} from '~/character'
import {MyView} from '~/my-view'


export function init(){
  console.log('init!')
  var bob = new Character('bob');
  bob.speak();

  var bbView = new MyView();
  bbView.render();
}

// export default function init(){
//   console.log('init!')
// }
//export init as init