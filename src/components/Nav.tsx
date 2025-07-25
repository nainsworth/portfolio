
const Nav = () => {
  return (
    <div className="w-full m-auto flex justify-between p-6 xl:w-7xl xl:px-0">
      <div>
        <p>Portfolio Logo</p>
      </div>
      <div>
        <ul className="flex gap-8">
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav