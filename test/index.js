
import element from 'virtual-element';
import assert from 'assert';
import { tree, render } from 'deku';
import { List, Item } from '../src';

const fixture = document.createElement('div');

describe('CheckList', function() {
  before(function() {
    document.body.appendChild(fixture);
  });

  beforeEach(function() {
    fixture.innerHTML = '';
  });

  after(function() {
    document.body.appendChild(fixture);
  });

  it('should render', function() {
    const el = mount(
      <List>
        <Item />
      </List>
    );
    const checkList = el.querySelector('.CheckList');
    assert(checkList);
  });
});

function mount(n) {
  const app = tree(n);
  render(app, fixture);
  return fixture;
}
