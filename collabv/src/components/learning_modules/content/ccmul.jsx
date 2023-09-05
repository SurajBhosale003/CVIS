// import React, { Component } from 'react'
// import { Collapse, Tabs ,Space } from 'antd';
// import {dataforccMulpage} from '../learning_pages/data.json'
// import "./i.css"
// const items=dataforccMulpage;
// export class ccmul extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className='title' >Cloud Computing - Mulesoft</h1>
//         <Space size={30} direction='vertical'>
//       <Collapse  className='collapse1'  accordion={true} >
//         <Collapse.Panel header="Chapter 1">
//        <Tabs defaultActiveKey='tab1' tabPosition='left' className='tabs'>
//           <Tabs.TabPane tab="Lesson 1" key="tab1" className='tabheader'>
//             <div className='content'><h2>Lesson 1</h2><br/>This is your step description. Use this space to tell participants how to complete this step. Include text and an image or video to make your instructions interesting and easy to understand. You can also imbed events, products and more in the bottom formatting panel when creating the step.Consider adding words of encouragement to keep participants motivated to finish your program.</div>
//           </Tabs.TabPane>
//           <Tabs.TabPane tab="Lesson 2" key="tab2" className='tabheader'>
//             <div className='content'><h2>Lesson 2</h2><br/>This is your step description. Use this space to tell participants how to complete this step. Include text and an image or video to make your instructions interesting and easy to understand. You can also imbed events, products and more in the bottom formatting panel when creating the step.Consider adding words of encouragement to keep participants motivated to finish your program</div>
//           </Tabs.TabPane>
//         </Tabs>
//         </Collapse.Panel>
//         <Collapse.Panel header="Chapter 2">
//        <Tabs defaultActiveKey='tab3' tabPosition='left' className='tabs'>
//           <Tabs.TabPane tab="Lesson 1" key="tab3" className='tabheader'>
//             <div className='content'><h2>Lesson 1</h2><br/>This is your step description. Use this space to tell participants how to complete this step. Include text and an image or video to make your instructions interesting and easy to understand. You can also imbed events, products and more in the bottom formatting panel when creating the step.Consider adding words of encouragement to keep participants motivated to finish your program.</div>
//           </Tabs.TabPane>
//           <Tabs.TabPane tab="Lesson 2" key="tab4" className='tabheader'>
//             <div className='content'><h2>Lesson 2</h2><br/>This is your step description. Use this space to tell participants how to complete this step. Include text and an image or video to make your instructions interesting and easy to understand. You can also imbed events, products and more in the bottom formatting panel when creating the step.Consider adding words of encouragement to keep participants motivated to finish your program.</div>
//           </Tabs.TabPane>
//         </Tabs>
//         </Collapse.Panel>
//         <Collapse.Panel header="Chapter 3">
//        <Tabs defaultActiveKey='tab5' tabPosition='left' className='tabs'>
//           <Tabs.TabPane tab="Lesson 1" key="tab5" className='tabheader'>
//             <div className='content'><h2>Lesson 1</h2><br/>This is your step description. Use this space to tell participants how to complete this step. Include text and an image or video to make your instructions interesting and easy to understand. You can also imbed events, products and more in the bottom formatting panel when creating the step.Consider adding words of encouragement to keep participants motivated to finish your program.</div>
//           </Tabs.TabPane>
//           <Tabs.TabPane tab="Lesson 2" key="tab6" className='tabheader'>
//             <div className='content'><h2>Lesson 2</h2><br/>This is your step description. Use this space to tell participants how to complete this step. Include text and an image or video to make your instructions interesting and easy to understand. You can also imbed events, products and more in the bottom formatting panel when creating the step.Consider adding words of encouragement to keep participants motivated to finish your program.</div>
//           </Tabs.TabPane>
//         </Tabs>
//         </Collapse.Panel>
//         </Collapse>
//         </Space>
//       </div>
//     )
//   }
// }

// export default ccmul
// // import React, { Component } from 'react'
// // import {Tabs} from 'antd'
// // import "./i.css"
// // export class ccmul extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <Tabs defaultActiveKey='tab1' tabPosition='left' className='tabs'>
// //           <Tabs.TabPane tab="tab 1" key="tab1" className='tabheader'>
// //             <div className='content'>Hi</div>
// //           </Tabs.TabPane>
// //           <Tabs.TabPane tab="tab 2" key="tab2">
// //             <div>By</div>
// //           </Tabs.TabPane>
// //           <Tabs.TabPane tab="tab 3" key="tab3">
// //             <div>TRy</div>
// //           </Tabs.TabPane>
// //         </Tabs>
// //       </div>
// //     )
// //   }
// // }

// // export default ccmul



import  { useState, useRef } from 'react';

import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Fullscreen from '@mui/icons-material/FullscreenOutlined';
import FullscreenExit from '@mui/icons-material/FullscreenExitOutlined';

import './CloudComputing.css';
import lessonContent from './lessonContent.json';

function Ccmul() {

  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const lessonContentRef = useRef(null);

  const handleChapterChange = (chapterIndex) => {
    setSelectedChapterIndex(chapterIndex);
    setSelectedLessonIndex(0);
  };

  const handleLessonChange = (lessonIndex) => {
    setSelectedLessonIndex(lessonIndex);
  };

  const handleFullScreenToggle = () => {
    if (!isFullScreen) {
      lessonContentRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const lessonData = [
    {
      chapter: 'Chapter 1',
      lessons: ['Lesson 1', 'Lesson 2']
    },
    {
      chapter: 'Chapter 2',
      lessons: ['Lesson 1', 'Lesson 2']
    },
    {
      chapter: 'Chapter 3',
      lessons: ['Lesson 1', 'Lesson 2']
    }
  ];

  const currentChapter = lessonData[selectedChapterIndex];
  const currentLesson = currentChapter.lessons[selectedLessonIndex];

  const lessonContentText = lessonContent[currentChapter.chapter][currentLesson];

  return (
    <div className="lesson-component">
      <div className="lesson-list">
        <List>
          {lessonData.map((chapter, chapterIndex) => (
            <div key={chapterIndex}>
              <ListItem button onClick={() => handleChapterChange(chapterIndex)}>
                <ListItemText primary={chapter.chapter} />
              </ListItem>
              {selectedChapterIndex === chapterIndex && (
                <Box ml={2}>
                  <List>
                    {chapter.lessons.map((lesson, lessonIndex) => (
                      <ListItem key={lessonIndex} button onClick={() => handleLessonChange(lessonIndex)}>
                        <ListItemText primary={lesson} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </div>
          ))}
        </List>
      </div>

      {/* right side portion */}
      <div className={`lesson-content ${isFullScreen ? 'full-screen' : ''}`} ref={lessonContentRef}>
      <div   className="full-screen-button" onClick={handleFullScreenToggle} >
          {isFullScreen ? <FullscreenExit fontSize="large" color="black"  /> :    <Fullscreen fontSize="large"  color="black" />}
          
        </div>
        <Typography variant="h5">{currentLesson}</Typography>
       
        <Typography>{lessonContentText}</Typography>
       
      </div>
    </div>
  );
}

export default Ccmul;


