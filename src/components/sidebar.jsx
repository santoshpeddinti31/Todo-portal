import React,{useState} from 'react';
import Styles from "../components/sidebar.module.css"
import {HiOutlineSquares2X2} from 'react-icons/hi2'
import {MdInsertChartOutlined} from 'react-icons/md'
import{TbChartCandleFilled} from 'react-icons/tb'
import {HiShare} from 'react-icons/hi'
import {BsArrowLeft} from 'react-icons/bs'
import{RiMoonClearFill} from 'react-icons/ri'
import {VscGlobe} from 'react-icons/vsc'
const Sidebar=()=>{

    const [move,setMove]=useState(false);

    const changePosition=()=>{
        setMove(!move);
    };

    return(
      <div className={Styles.sidebar}>
    
            <div className={Styles.userdata} >
                <span id={Styles.profile}>N</span><span id={Styles.name}>Name<BsArrowLeft id={Styles.arr}/><sup id={Styles.un}>_</sup></span>
            </div>
      
            <ul className={Styles.nav}>
                <li><HiOutlineSquares2X2 id={Styles.home}/>Home</li>
                <li><MdInsertChartOutlined id={Styles.sec1}/>section 1</li>
                <li><TbChartCandleFilled id={Styles.sec2}/>section 2</li>
                <li><HiShare id={Styles.sec3}/>section 8</li>
                <li><HiShare id={Styles.sec4}/>section 8</li>
            </ul>
               <div className={Styles.ft1}><span id={Styles.pr1}>N</span>$0.90</div>
               <div className={Styles.ft2}>Buy $XYZ</div>
            <div>
                <VscGlobe id={Styles.globe}/><div className={Styles.toggle}><RiMoonClearFill id={Styles.moon}/><div id={Styles.move} style={{transform:move ? 'translate(-1.7rem)':''} }  onClick={changePosition}></div></div>
            </div>
      </div>
    );

};
export default Sidebar;