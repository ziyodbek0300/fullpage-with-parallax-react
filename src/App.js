import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import { Parallax } from 'react-scroll-parallax';
import Img1 from './photos/9.jpg'
import Img3 from './photos/1.png'
import Img2 from './photos/4.png'
import Img5 from './photos/5.png'
import Img6 from './photos/6.jpg'
import Img7 from './photos/7.png'
import Img8 from './photos/3.jpg'

class App extends Component {
  componentDidMount() {

    console.log("sadasdasd")
  }
  render() {
    return (
      <Fullpage goto={() => console.log("Hola")}>
        <FullPageSections>
          <FullpageSection style={{
            background: '#3358D5',
            backgroundRepeate: 'no-repeate',
            backgroundSize: '150%',
            backgroundPosition: 'center',
            height: '100vh',
            padding: '1em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div style={{
              height: '450px',
              width: '1000px',
              backgroundImage: `url(${Img5})`,
              backgroundSize: '40% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} className='text-center'>
              <Parallax speed={2} className='text-center d-flex justify-content-center align-items-center h-100'>
                <h1 className='display-1 fw-bold text-white position-absolute'>Hello World</h1>
              </Parallax>
            </div>
          </FullpageSection>
          <FullpageSection style={{
            backgroundImage: `url(${Img3})`,
            backgroundRepeate: 'no-repeate',
            backgroundSize: '150%',
            backgroundPosition: 'center',
            height: '100vh',
            padding: '1em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div style={{
              height: '450px',
              width: '1000px',
              backgroundImage: `url(${Img3})`,
              backgroundSize: '40% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} className='text-center'>
              <Parallax speed={2} className='text-center d-flex justify-content-center align-items-center h-100'>
                <h1 className='display-1 fw-bold text-white position-absolute'>Hello World</h1>
              </Parallax>
            </div>
          </FullpageSection>
          <FullpageSection
            style={{
              backgroundImage: `url(${Img6})`,
              backgroundRepeate: 'no-repeate',
              backgroundSize: '150%',
              backgroundPosition: 'center',
              height: '100vh',
              padding: '1em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
            <div style={{
              height: '450px',
              width: '1000px',
              backgroundImage: `url(${Img7})`,
              backgroundSize: '40% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} className='text-center'>
              <Parallax speed={2} className='text-center d-flex justify-content-center align-items-center h-100'>
                <h1 className='display-1 fw-bold text-white position-absolute'>Hello World</h1>
              </Parallax>
            </div>
          </FullpageSection>
          <FullpageSection style={{
            backgroundImage: `url(${Img8})`,
            backgroundRepeate: 'no-repeate',
            backgroundSize: '150%',
            backgroundPosition: 'center',
            height: '100vh',
            padding: '1em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div style={{
              height: '450px',
              width: '1000px',
              backgroundImage: `url(${Img8})`,
              backgroundSize: '40% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} className='text-center'>
              <Parallax speed={2} className='text-center d-flex justify-content-center align-items-center h-100'>
                <h1 className='display-1 fw-bold text-white position-absolute'>Hello World</h1>
              </Parallax>
            </div>
          </FullpageSection>
          <FullpageSection style={{
            background: '#3358D5',
            backgroundRepeate: 'no-repeate',
            backgroundSize: '150%',
            backgroundPosition: 'center',
            height: '100vh',
            padding: '1em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div style={{
              height: '450px',
              width: '1000px',
              backgroundImage: `url(${Img5})`,
              backgroundSize: '40% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} className='text-center'>
              <Parallax speed={2} className='text-center d-flex justify-content-center align-items-center h-100'>
                <h1 className='display-1 fw-bold text-white position-absolute'>Hello World</h1>
              </Parallax>
            </div>
          </FullpageSection>
        </FullPageSections>

      </Fullpage>
    )
  }
}

export default App;
