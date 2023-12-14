import {useState,useEffect} from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



const GoToTop = () => {
    const [visible, setvisible] = useState(false);
    const GoToTopButton = () => {
        window.scrollTo({top : 0,left: 0,behavior:"smooth"});
    };
    const listenToScroll = () => {
        let hiddenOnHeight = 20;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll>hiddenOnHeight)
        {
            setvisible(true);
        }else
        {
            setvisible(false);
        }
    };

    useEffect(() => {
    window.addEventListener("scroll",listenToScroll);
    return ()=> window.removeEventListener("scroll",listenToScroll);
    }, []);
    
  return (
    <div>
      <Wrapper>
        {visible && (
            <div className ="topButton" onClick = {GoToTopButton}>
                <ArrowUpwardIcon className ="topButtonIcon"/>
            </div>
        )}
      </Wrapper>

    </div>
  );
};

const Wrapper = styled.section`
  display : flex;
  justify-content:center;
  align-item:center;
  position : relative;

  .topButton{
    font-size: 1.5rem;
    width: 4rem;
    height: 4rem;
    color: #fff;
    background-color:#0075B0;

    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    right: 7.2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .topButtonIcon{
        animation: gototop 1.2s linear infinite alternate-reverse;
      }
  
      @keyframes gototop {
        0% {
          transform: translateY(-0.2rem);
        }
        100% {
          transform: translateY(0.5rem);
        }
      }
    }
  
`;
export default GoToTop


