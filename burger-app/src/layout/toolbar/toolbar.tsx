import "./toolbar.css";



const toolbar = (props: any) => {
  function linksGen(obj: any) {
    return Object.keys(obj).map((e) => {
      return (
        <li key={e} data-test={e}>
          <a href={obj[e]}>{e}</a>
        </li>
      );
    })
  }
  return (
    <nav className="Toolbar">
      <div className="Logo">
        <a href="/">
          <img className="logoImage" src={props.logo} alt="BurgerBuilder" />
        </a>
      </div>
      <ul>
        {linksGen(props.links)}
      </ul>
    </nav>
  );
};
export default toolbar;

