import "./CoreValues.css";


import { createTheme } from '@mui/material/styles';
import { Grid } from "@mui/material";
import { Box, ThemeProvider } from '@mui/material';

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import FeedIcon from "@mui/icons-material/Feed";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';



const theme = createTheme({
  
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: 16,
    h4: {
      fontSize: '2.5rem', // x-large size for header title
      fontWeight: 600,
      color: '#fff', // Header title color
      textAlign: 'center',
      marginTop: '10px',
      paddingTop: '5%',
    },
    subtitle1: {
      fontSize: '1.125rem', // medium size for header text
      color: '#fff', // Header text color
      textAlign: 'center',
      paddingTop: '1%',
    },
    h6: {
      fontSize: '1.5rem', // large size for value title
      fontWeight: 600,
      color: '#fff', // Value title color
      paddingBottom: '15px',
    },
    body1: {
      fontSize: '1rem', // default font size for content
      textAlign: 'left',
    },
    h3: {
      fontSize: '2.5rem', // x-large size for bottom text
      fontWeight: 600,
      color: '#fff', // Bottom text color
      textAlign: 'center',
      paddingBottom: '2%',
    },
  },
  overrides: {
    MuiGrid: {
      root: {
        '--Grid-borderWidth': '1px',
        borderTop: 'var(--Grid-borderWidth) solid',
        borderLeft: 'var(--Grid-borderWidth) solid',
        borderColor: 'divider',
        '& > div': {
          borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
        },
      },
    },
    MuiBox: {
      root: {
        flexGrow: 1,
        padding: '16px', // Equivalent to p: 2 in Box
      },
    },
    MuiGridListTile: {
      root: {
        border: '0.1px solid white', // Border for each value item
      },
    },
    MuiCardContent: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', // To center the content within the value item
      },
    },
    MuiSvgIcon: {
      root: {
        paddingBottom: '15%', 
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
});

export default function CoreValues() {
  const values = [
    {
      title: "Focus on Latest Technology and Skills",
      content:
        "Curriculum designed to cater to the latest skills needed for the industry.",
      icon: <ChecklistRtlIcon />,
    },
    {
      title: "Experienced Trainers",
      content:
        "Certified trainers with a good amount of work experience in the industry make Leading Computer training institute.",
      icon: <FeedIcon />,
    },
    {
      title: "Problem Solving",
      content:
        "We help you build a logical and analytical mindset through case study and projects based on real industry scenarios.",
      icon: <AccountTreeIcon />,
    },
    {
      title: "Interview Preparation",
      content:
        "An interview is the most challenging round of any hiring process. Mock interviews by InterviewBuddy give you the platform to prepare, practice, and experience firsthand how a real-life job interview feels.",
      icon: <QuestionAnswerOutlinedIcon />,
    },
    {
      title: "Career Oriented Courses",
      content:
        "The course includes multiple skills to put the candidate on a fast track career with placement support.",
      icon: <CrisisAlertIcon />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
    <div className="coreValue">
      <div className="coreValueHeader">
        <div  className="coreValueHeaderTitle">            
            Our Core Values
        </div>
        <div  className="coreValueHeaderText">
             practice what we preach
        </div>
      </div>

      <div className="coreValueMiddle">
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{
              "--Grid-borderWidth": "1px",
              borderTop: "var(--Grid-borderWidth) solid",
              borderLeft: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
              "& > div": {
                borderRight: "var(--Grid-borderWidth) solid",
                borderBottom: "var(--Grid-borderWidth) solid",
                borderColor: "divider",
              },
              "& .value": {
                border: " 0.1px solid white",
              },
              
            }}
          >
            {values.map((value, index) => (
              <Grid
                className="value"
                key={index}
                item
                xs={12 / 5}
                sm={12 / 5}
                md={12 / 5}
                lg={12 / 5}
                minHeight={200}
              >
                <div className="sigleDivValue">
                  <div className="valueIcon">                   
                    <div className="iconBorder">{value.icon}</div>
                  </div>
                  <div className="valueTitle">{value.title}</div>
                  <div className="ValueContent">{value.content}</div>
                </div>
              </Grid>
            ))}
            
          </Grid>
        </Box>
      </div>

      <div className="coreValueBottom">
        We Work With the Very Best
      </div>
    </div>
    </ThemeProvider>
  );
}
