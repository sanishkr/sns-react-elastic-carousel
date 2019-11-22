
# sns-react-elastic-carousel


**Note**: This is a forked repo from https://github.com/sag1v/react-elastic-carousel. So, all usage are similar to that. 

Here are the list of updates I made:
- [Removing default margin to SliderContainer](https://github.com/sag1v/react-elastic-carousel/issues/23)
- [Updating to new way of attrs in styled-components](https://github.com/sag1v/react-elastic-carousel/issues/25)
- Removing Dots onclick fn
- [Updating Dots style](https://github.com/sag1v/react-elastic-carousel/issues/24)

### TODOs
- [ ] Infinite looping
- [ ] Control items visible on scroll when more than one items are visible on the screen at a time.

#### Apart from these, rest all feature remain the same. Use below npm package to use this.

## Install

```bash
npm install --save sns-react-elastic-carousel
```

***
#### Most of the documentation and demo below is from parent repo. 
#### Credit to [sag1v](https://github.com/sag1v)
***

> A flexible and responsive carousel component for react 

[![NPM](https://img.shields.io/npm/v/sns-react-elastic-carousel.svg)](https://www.npmjs.com/package/sns-react-elastic-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Why do we need yet another carousel component?
- **Element resize support (true responsiveness)**  
  Most of the carousel components are responsive to the viewport size, but this is not a real responsive support as we can have an element with a `width:500px` on a `1200px` screen, most carousel component will "think" we are on a `1200px` mode because they "watch" the view-port's size and not the wrapping element's size.
  This is the reason why `react-eleastic-carousel` is using the [resize-observer](https://developers.google.com/web/updates/2016/10/resizeobserver) which gives us a true responsive support, not matter on what screen size we are.
  
- **RTL (right-to-left) support**  
  Supporting right-to-left languages requires a full support for right-to-left rendering and animations which is not supported in most of the carousel components out there. also, right-to-left support is [important and should be a standard for most applications](https://www.youtube.com/watch?v=A_3BfONFRUc).


## [Live Demos & Docs](https://sag1v.github.io/react-elastic-carousel/)

## Usage

```jsx
import React, { Component } from 'react';
import Carousel from 'sns-react-elastic-carousel';

class App extends Component {
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
      </Carousel>
    )
  }
}
```

## Playground
[![Edit sns-react-elastic-carousel](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/21o46mkwnr)

## Development

```console 
git clone https://github.com/sanishkr/sns-react-elastic-carousel.git
cd sns-react-elastic-carousel
yarn
yarn docz:dev
```

The application is running at http://localhost:8888

## License

MIT ©

