import fetchMock from 'fetch-mock';

fetchMock.config.fallbackToNetwork = true;

fetchMock.restore();

const operations = {
  create: true,
  read: true,
  update: true,
  delete: true,
};

fetchMock.get('/proza/domein/foo/toegelatenoperaties', operations);
fetchMock.get('/proza/domein/bar/toegelatenoperaties', operations);

const urlBasic = 'proza/domein/foo/bar';
const responseBasic = { code: 'bar', tekst: 'foobar' };

fetchMock.get(urlBasic, responseBasic);
fetchMock.put(urlBasic, responseBasic);

const urlError = 'proza/domein/foo/fout';

fetchMock.get(urlError, {
  code: 'bar',
  tekst: 'Update zal fout gaan',
});
fetchMock.put(urlError, 404);

const urlMarkup = 'proza/domein/foo/markup';
const responseMarkup = {
  code: 'markup',
  tekst: `
  <h3>Heading 3</h3>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="#">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem dolor sit amet, consectetur adipisicing elit. Deleniti, in.</p>

  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum dolor</li>
  </ul>
  
  <ol>
    <li>Lorem ipsum dolor sit.</li>
    <li>Lorem ipsum dolor sit amet, consectetur.</li>
  </ol>

  <table>
    <caption>table title</caption>
    <thead>
      <tr>
        <th>head 1</th>
        <th>head 2</th>
        <th>head 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>item 1</td>
        <td>item 2</td>
        <td>item 3</td>
      </tr>
      <tr>
        <td>item 1</td>
        <td>item 2</td>
        <td>item 3</td>
      </tr>
      <tr>
        <td>item 1</td>
        <td>item 2</td>
        <td>item 3</td>
      </tr>
    </tbody>
  </table>
  
  <p><strong>strong-tag</strong></p>
  <p><b>b-tag</b></p>
  <p><em>em-tag</em></p>
  <p><i>i-tag</i></p>
  <p><strike>strike-tag</strike></p>
  <p><s>s-tag</s></p>
  <p><mark>mark-tag</mark></p>
  <p><code>code-tag</code></p>
  <p><pre>pre-tag</pre></p>
  <p><hr/></p>
  <p><blockquote>Lorem ipsum dolor sit amet.</blockquote></p>`,
};

fetchMock.get(urlMarkup, responseMarkup);
fetchMock.put(urlMarkup, responseMarkup);

const urlParameters = 'proza/domein/foo/parameters';
const responseParameters = {
  code: 'parameters',
  tekst:
    '<p>Lorem <b>${parameter.key2}</b> dolor sit amet, consectetur adipiscing elit. Duis iaculis molestie feugiat. Lorem <b>${parameter.key2}</b> eros, consequat et venenatis ac, scelerisque feugiat nunc. Nam molestie tincidunt lectus, nec volutpat ante egestas at. Curabitur quis odio metus. Morbi at purus ac purus convallis <b>${parameter.key1}</b> at eu est. Nunc id ligula quis justo semper ullamcorper. Donec orci nisi, <b>${parameter.key1}</b> varius massa ut, vulputate imperdiet nibh. Maecenas <b>${parameter.key1}</b> lectus quis turpis cursus, ac vehicula ligula fermentum.</p><p>Praesent consequat diam nec semper congue. <b>${parameter.key2}</b> tempor ut erat nec aliquam. Quisque ullamcorper sapien magna, sit amet porta <b>${parameter.key2}</b> pulvinar aliquam. Sed eleifend fringilla augue in vehicula. Sed leo sem, imperdiet non ornare maximus, bibendum facilisis massa. Nunc condimentum leo mi, quis porta ante mattis ut. Quisque eu enim vel metus consequat iaculis. Donec malesuada odio quis quam vulputate vestibulum.</p>',
};

fetchMock.get(urlParameters, responseParameters);
fetchMock.put(urlParameters, responseParameters);

const urlPreload = 'proza/domein/bar';
const responsePreload = [
  {
    code: 'foo',
    tekst: 'barfoo',
  },
  {
    code: 'bar',
    tekst: 'barbar',
  },
];

fetchMock.get(urlPreload, responsePreload);

fetchMock.put('/proza/domein/bar/foo', {
  code: 'foo',
  tekst: 'foobar',
});

fetchMock.put('/proza/domein/bar/bar', {
  code: 'foo',
  tekst: 'foobar',
});
