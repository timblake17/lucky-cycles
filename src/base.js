import Rebase from 're-base';

const base= Rebase.createClass({
  // apiKey: cannot put on github
  authDomain: "lucky-cycles.firebaseapp.com",
  databaseURL: "https://lucky-cycles.firebaseio.com",
})

export default base;
