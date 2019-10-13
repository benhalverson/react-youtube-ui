import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import VideoList from '../VideoList'
import VideoItem from '../VideoItem'

Enzyme.configure({ adapter: new Adapter() });

describe('Component: VideoList', () => {

  const videos = [
    {
      id: {
        videoId: '123'
      },
      snippet: {
        thumbnails: {
          medium: {
            url: 'imageurl.jpg'
          }
        },
        title: 'Hello world'
      }
    },
    {
      id: {
        videoId: '456'
      },
      snippet: {
        thumbnails: {
          medium: {
            url: 'imageurl2.jpg'
          }
        },
        title: 'Hello again'
      }
    },
    {
      id: {
        videoId: '789'
      },
      snippet: {
        thumbnails: {
          medium: {
            url: 'imageurl3.jpg'
          }
        },
        title: 'Hello you'
      }
    }
  ]
  
  test('should render', () => {
    const wrapper = Enzyme.shallow(<VideoList videos={ videos } />)

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('should filter non-video', () => {
    const modifiedVideos = [
      ...videos,
      {
        id: {
          channelId: '313'
        }
      }
    ]
    const wrapper = Enzyme.shallow(<VideoList videos={ modifiedVideos } />)

    const items = wrapper.find(VideoItem)

    // the added item shouldn't be counted since it is not a video
    expect(items.length).toBe(modifiedVideos.length - 1)
  })

  test('should trigger event on select child', () => {
    const spyEvent = jest.fn()
    const wrapper = Enzyme.shallow(<VideoList videos={ videos } onVideoSelect={ spyEvent } />)    
    const items = wrapper.find(VideoItem)

    items.first().prop('onVideoSelect')()

    expect(spyEvent).toBeCalled()
  })

});