import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
const btnClass = [
  'bg-grey',
  'text-black border',
  'border-blue-darkest',
  'rounded',
  'shadow',
  'py-1',
  'px-3',
  'appearence-none',
  'focus:outline-none',
  'focus:bg-white',
  'w-auto'
].join(' ');

const icons = classes => {
  const c = `self-center ml-1 ${classes}`;

  return (
    <div className={c}>
      <FaGithub className="text-white text-xl mr-1" />
      <FaLinkedinIn className="text-white text-xl" />
    </div>
  );
};

export default class HomeLayout extends React.Component {
  render() {
    const { children } = this.props;
    const { history } = children.props;
    return (
      <div>
        <header className="bg-blue-darker p-6 flex justify-between shadow">
          <h3
            className="text-white mr-2 hover:text-grey-dark cursor-pointer leading-normal"
            onClick={() => history.push('/')}
          >
            Stories
          </h3>
          {/* Small screens */}
          <input
            placeholder="Search here..."
            className={btnClass + ' min:block md:hidden'}
          />
          {icons('min:block md:hidden')}
          {/* Larger screens */}
          <div className="min:hidden md:flex">
            <input placeholder="Search here..." className={btnClass} />
            {icons()}
          </div>
        </header>
        {children}
      </div>
    );
  }
}
