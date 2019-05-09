import React from 'react';

const StoryComponent = ({ title, fullStory }) => (
    <article>
        StoryComponent
        <header>{title}</header>
        { fullStory}
    </article>
);

export default StoryComponent;