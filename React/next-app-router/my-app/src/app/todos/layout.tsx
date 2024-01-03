export const Layout = (props) => {
  return (
    <>
      <h1>todos Layout</h1>
      {props.children}
			{props.todoList}
    </>
  );
};

export default Layout;
