import React from 'react'
import styled from 'styled-components';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const Container=styled.div`
`
const Item=styled.div`
  display:flex;
  gap:5px;
  padding:10px 15px;
`
const Hr=styled.hr`
  background-color:#373737;
  margin:15px 0px;
`
const MenuItems = ({name,icon}) => {
  return (
    <Container>
      <Item>
        <HomeOutlinedIcon />
        Home
      </Item>
      <Item>
        <ExploreOutlinedIcon/>
        Explore
      </Item>
      <Item>
        <SubscriptionsOutlinedIcon/>
        Subscription
      </Item>
      <Hr/>
      <Item>
        <LibraryAddOutlinedIcon/>
        Library
      </Item>
      <Item>
        <RestoreOutlinedIcon/>
        History
      </Item>
      <Hr/>
      <Item>
        <SportsBasketballOutlinedIcon/>
        Sports
      </Item>
      <Item>
        <MovieFilterOutlinedIcon/>
        Movie
      </Item>
      <Item>
        <NewspaperOutlinedIcon/>
        News
      </Item>
      <Item>
        <LiveTvOutlinedIcon/>
        Live
      </Item>
      <Item>
        <SettingsOutlinedIcon/>
        Settings
      </Item>
      <Item>
        <BugReportOutlinedIcon/>
        Report
      </Item>
      <Item>
        <HelpOutlineOutlinedIcon/>
        Help
      </Item>
      
      
    </Container>
  )
}
export default MenuItems