import React from 'react';
import CardComponent from '../../components/card/card.component';
import StoriesService from '../../services/stories.service';

export default class HomePage extends React.Component {
  storiesService = new StoriesService();
  constructor(props) {
    super(props);

    this.state = {
      stories: []
    };

    this.stories$ = this.storiesService.stories$.subscribe(stories => {
      this.setState({ stories });
    })
  }

  render() {
    return <div className="flex flex-col min:p-2">
        { this.state.stories.map((stories, i) => <CardComponent key={i} {...stories} />) }
    </div>;
  }

  componentDidMount() {
    this.storiesService.load();
  }

  componentWillUnmount() {
    this.storiesService.dispose();
    this.stories$.unsubscribe();
  }
}
