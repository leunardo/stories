import React from 'react';

export default class CardComponent extends React.Component {
  render() {
    // const { title, brief, photo, tags, link } = this.props;

    return (
      <article className="article max-w-lg w-full flex self-center mt-4 hover:shadow-md">
        <img
          className="h-48 flex-none bg-cover rounded-l text-center overflow-hidden"
          src="https://tailwindcss.com/img/card-left.jpg"
        />
        <div className="border-r border-b  border-grey-light border-l-0 border-t bg-white rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <h4 className="text-black font-bold text-xl mb-2">
            Loren Ipsun sit dolor amet
          </h4>
          <p
            className="text-grey-darker text-base overflow-hidden"
            style={{ height: '75px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <footer className="flex justify-between">
            <div className="px-2 pt-4">
              <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                #photography
              </span>
            </div>
            <button className="underline p-2 rounded">Read more</button>
          </footer>
        </div>
      </article>
    );
  }
}
