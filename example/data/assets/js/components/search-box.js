/* eslint react/react-in-jsx-scope:0*/
const { render, Component } = React;

const getLunrIndex = () => axios.get('/index.json');
const getLunarMetadataStore = () => axios.get('/lunr-metadata-store.json');

const loadData = () => axios
.all([getLunrIndex(), getLunarMetadataStore()])
.then( axios.spread( (idx, store) => {
  return {
    idx: lunr.Index.load(idx.data),
    store: store.data,
  };
}))
.catch( (err) => console.error(err) );

class SearchBox extends Component {

  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    this.gotoHome = this.gotoHome.bind(this);
    this.state = {};
  }

  componentWillMount() {
    loadData().then( ({ idx, store }) => {
      this.setState( { idx, store } );
    });
  }

  onChangeText({ target: { value: searchTerm } = {} } = {}) {
    const { idx, store } = this.state;

    const searchResults = idx.search(searchTerm)
    .map((item) => {
      const { ref, score } = item;
      const { filepath } = store[ref];

      return Object.assign({}, store[ref], {
        score: (score * 100).toFixed(2),
        url: `/${filepath}`,
      });
    })
    .filter( item => item );

    this.setState({ searchTerm, searchResults });
  }

  gotoHome() {
    window.location.href = '/';
  }

  renderDisabled() {
    return (
      <div className="input-field col s6">
        <input type="text"
          className="validate"
          id="searchTxt"
          disabled />
        <label htmlFor="searchTxt">Search</label>
      </div>
    );
  }

  renderNormal() {
    const { searchTerm } = this.state;

    return (
        <div className="input-field col s6">
          <input type="text"
            className="validate"
            id="searchTxt"
            value={searchTerm}
            onChange={this.onChangeText} />
          <label htmlFor="searchTxt">Search</label>
        </div>
    );
  }

  renderResuts() {
    const { searchResults = [] } = this.state;

    return searchResults.map( (result) => {
      const { url, title, score } = result;
      const txt = `${title} (${score})`;
      return <a key={url} className="chip" style={{margin: '5px'}} href={url}>{txt}</a>;
    });
  }

  render() {
    const logo = '/assets/images/logo/DL_logo.png';
    const { idx } = this.state;

    const box = idx ? this.renderNormal() : this.renderDisabled();
    const results = this.renderResuts();

    return (
      <div className="controls">
        <img src={logo} onClick={this.gotoHome} width="100%"/>
        { box }
        { results }
      </div>
    );
  }
}

render(<SearchBox />, document.getElementById('search-box'));
