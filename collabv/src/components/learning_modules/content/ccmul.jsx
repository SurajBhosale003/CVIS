

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


