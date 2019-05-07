import React from 'react';
import { Link } from 'react-router-dom';

export default class CardComponent extends React.Component {
  render() {
    const { title, brief, photo, tags, friendlyUrl } = this.props;

    return (
      <article className="article max-w-lg w-full flex self-center mt-4 hover:shadow-md">
        <img
          className="h-48 flex-none bg-cover rounded-l text-center overflow-hidden"
          src={photo}
        />
        <div className="border-r border-b  border-grey-light border-l-0 border-t bg-white rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <h4 className="text-black font-bold text-xl mb-2">{title}</h4>
          <p
            className="text-grey-darker text-base overflow-hidden"
            style={{ height: '75px' }}
          >
            {brief}
          </p>
          <footer className="flex justify-between">
            <div className="px-2 pt-4">
              {tags.map((p, i) => (
                <span
                  key={i}
                  className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
                >
                  #{p}
                </span>
              ))}
            </div>
            <Link className="underline p-2 rounded" to={`/${friendlyUrl}`}>Read more</Link>
          </footer>
        </div>
      </article>
    );
  }
}
