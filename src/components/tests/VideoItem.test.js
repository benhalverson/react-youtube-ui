import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import VideoItem from '../VideoItem'

Enzyme.configure({ adapter: new Adapter() });

describe('Component: VideoItem', () => {
  
  test('should render', () => {
    const video = {
      snippet: {
        thumbnails: {
          medium: {
            url: 'imageurl.jpg'
          }
        },
        title: 'Hello world'
      }
    }
    const wrapper = Enzyme.shallow(<VideoItem video={ video } />)

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('should trigger event on select', () => {
    const video = {
      snippet: {
        thumbnails: {
          medium: {
            url: 'imageurl.jpg'
          }
        },
        title: 'Hello world'
      }
    }
    const spyEvent = jest.fn()
    const wrapper = Enzyme.shallow(<VideoItem video={ video } onVideoSelect={ spyEvent } />)
    
    // trigger click
    wrapper.find('.video-item').simulate('click')

    expect(spyEvent).toBeCalledWith(video)
  })

});