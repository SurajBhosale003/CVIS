import "./CardBrochure.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(8),
  height: "auto + 100px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
  "&:first-child": {
    marginLeft: 0,
  },
  "&:last-child": {
    marginRight: 0,
  },
}));

export default function CardBrochure() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100vw" }}>
      <div style={{ display: "flex", margin: 0, padding: 0, width: "100%" }}>
        <Item style ={{backgroundColor: "#000000"  }}>
          <Box
            id="category-a"
            sx={{  textTransform: "uppercase" }}        
          >
            <div className ="titleBranding">Branding</div>
            
          </Box>
          <Box component="ul" aria-labelledby="category-a">
            <li  className= "Branding">
              Branding is the process of building a brand. To be more specific,
              it is a strategy designed by companies to help people to quickly
              identify their products and organization, and give them a reason
              to choose their products over the competition.
            </li>
          </Box>
        </Item>
        <Item style ={{backgroundColor: "#757575"  }}>
          <Box
            id="category-b"
            sx={{  textTransform: "uppercase" }}
          >
             <div className ="title">Internship</div>
            
          </Box>
          <Box component="ul" aria-labelledby="category-b">
            <li className ="Internship">
              A professional learning experience that offers meaningful,
              practical work related to a student is field of study or career
              interest. An internship gives a student the opportunity for career
              exploration and development, and to learn new skills.
            </li>
          </Box>
        </Item>
        <Item style ={{backgroundColor: "#EDEDED"  }}>
          <Box
            id="category-c"
            sx={{  textTransform: "uppercase" }}

          >
           <div className ="title">Design</div>

            
          </Box>
          <Box component="ul" aria-labelledby="category-c">
            <li className ="Design">
              Graphic design is a great career for people who are creative
              thinkers and enjoy art, technology, and communication. There are
              design needs across every industry, so Graphic Designers have many
              opportunities to take on a range of new and exciting projects.
            </li>
          </Box>
        </Item>
        <Item style ={{backgroundColor: "#4BD1A0"  }}>
          <Box
            id="category-d"
            sx={{  textTransform: "uppercase" }}

          >
            <div className ="titleConsulting">Consulting</div>

            
          </Box>
          <Box component="ul" aria-labelledby="category-d">
            <li className = "Consulting">
              In a nutshell, consultants provide expert opinions, analysis, and
              recommendations to organizations or individuals, based on their
              own expertise. They are essentially fixers, serving as objective
              troubleshooters, and providing strategies to prevent problems and
              improve performance.
            </li>
            
           
          </Box>
        </Item>
      </div>
    </Box>
  );
}
