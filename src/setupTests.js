import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class LocalStorage {
  constructor() {
    this.store = {};
  }

  setItem(key, string) {
    this.store[key] = string;
  }

  getItem(key) {
    return this.store[key];
  }

  clear() {
    this.store = {};
  }
}

global.localStorage = new LocalStorage();
