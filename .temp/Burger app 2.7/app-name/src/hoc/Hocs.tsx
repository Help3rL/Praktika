
type HocProps = {
    children: React.ReactNode; // 👈️ type children
  };
  
  const aux = (props: HocProps) => {
    return <div>{props.children}</div>;
  };
  export default aux;