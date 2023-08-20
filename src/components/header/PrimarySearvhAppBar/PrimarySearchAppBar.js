import * as React from "react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {HiBars3} from "react-icons/hi2"
// import MenuIcon from "@mui/icons-material/Menu";
import "./style.scss";
import { useState, useEffect } from "react";
// import "./Navbar.scss";

import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import logo from "../../../images/Asset-5300.png";
import textimg from "../../../images/Asset-6300-1.png";
import Fade from "@mui/material/Fade";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.55),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 370,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function PrimarySearchAppBar({
  role,
  isLogin,
  placement,
  onChange,
  showDrawer,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  // const navigate = useNavigate();

  const [anchorEle, setAnchorEle] = React.useState(null);
  const opena = Boolean(anchorEle);
  const handleClicka = (event) => {
    setAnchorEle(event.currentTarget);
  };
  const handleClosea = () => {
    setAnchorEle(null);
  };
const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      const resizeListener = () => {
        // change width from the state object
        setWidth(getWidth());
      };
      // set resize listener
      window.addEventListener("resize", resizeListener);

      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener("resize", resizeListener);
      };
    }, []);

    return width;
  }
  const newwidth = useCurrentWidth();

  const [showMenu, setShowMenu] = useState(false);
  const HandleLogout = async () => {
    localStorage.removeItem("userData");
    try {
      // await auth.signOut();

      window.location.reload(true);
      // navigate("/");
      // Redirect or update UI to reflect successful logout
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };

  const handleonchange = (e) => {
    setSearch(e.target.value);
  };
  const handleBlur = () => {
    setSearch(""); // Reset the search state when the input loses focus
  };
  const handleEnter = (e) => {
    e.preventDefault();
    // navigate(`self-search-quiz?search=${search}`);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link className="right-side_btn" to="/">
            <p>Home</p>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link  className="right-side_btn" to="/about">


            
      
      <p>About</p>
      </Link>
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>

        <div className="arrow-icon"  onClick={toggleDropdown}>&#9660;</div>
  
      {isOpen && (
        <ul className="dropdown-list">
         <li>a</li>
         <li>b</li>
         <li>c</li>
        </ul>
      )}
    </div>
{/* 
            <Button
            
        id="demo-customized-button"
        aria-controls={opena ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={opena ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClicka}
        endIcon={<KeyboardArrowDownIcon />}
      > */}
       {/* About
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEle}
        open={opena}
        onClose={handleClosea}
      >
        <MenuItem onClick={handleClosea} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClosea} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClosea} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClosea} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu> */}
          
      </MenuItem>

      
        <MenuItem>
          <Link className="right-side_btn" to="/treatments">
              <p>Treatments</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="right-side_btn" to="/testimonials">
              <p>Testimonials</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="right-side_btn" to="/digital-implants-blog">
              <p>Blog</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="right-side_btn" to="/contact">
              <p>Contact</p>
          </Link>
        </MenuItem>
        <MenuItem>
          
        <Link className="right_side_signup" to="/bookanappointment">
                <p style={{ color: "white" }}>Book Appointment</p>
            </Link>
        </MenuItem>
{/*       
      <MenuItem>
        <div className="right-side_btn" onCanPlay={handleOpen}>
          <IconButton>
            <p>Creat Quiz</p>
          </IconButton>
        </div>
      </MenuItem> */}
    </Menu>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "white",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
        zIndex: 80,
        marginBottom: "70px",
      }}
    >
      <AppBar
        // position="static"
        sx={{
          backgroundColor: "#FAFAFC",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          zIndex: 80,
          marginBottom: "40px",
        }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
            onClick={showDrawer}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton> */}
          <Box
            sx={{
              color: "black",
              marginRight: "20px",
              display: { xs: "block", sm: "block", md: "block" },
            }}
          >
            <Link to="/">
              <Typography
                sx={{ color: "black" }}
                variant="p"
                noWrap
                component="div"
              >
                <img src={logo} style={{ width: "120px" }} />
                {/* <div className="header_sidebar_title">
                  <div className="header_sidebar_title_heading">Mirown</div>
                  <div className="header_sidebar_title_sub">
                    <div className="header_sidebar_title_sub_line"></div>
                    <div className="header_sidebar_title_sub_text">QUIZZES</div>
                  </div>
                </div> */}
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg:"block" },
            }}
          >
            <Link
              sx={{
                display: { xs: "none", sm: "none", md: "none" },
              }}
              className="right-side_btn"
              to="/"
            >
              <img src={textimg} style={{ width: "220px" }} />
              {/* <IconButton
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <p>Self Study </p>
              </IconButton> */}
            </Link>
          </Box>
          {/* {role === "Admin" && (
            <Link
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              className="right-side_btn"
              to="classroom"
            >
              <IconButton>
                <p>Classroom</p>
              </IconButton>
            </Link>
          )}
          {role === "Teacher" && (
            <Link
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              className="right-side_btn"
              to="classroom"
            >
              <IconButton>
                <p>Classroom</p>
              </IconButton>
            </Link>
          )} */}
          {/* {role === "user" && (
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              className="right-side_btn"
              onClick={handleOpen}
            >
              <IconButton>
                <p>Classroom</p>
              </IconButton>
            </Box>
          )} */}
          {/* {role === "Student" && (
            <Link className="right-side_btn" to="/student-classes">
              <IconButton>
                <p>Classes</p>
              </IconButton>
            </Link>
          )}
         
            <Link
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              className="right-side_btn right_side_create"
              to="admin-create-quiz"
            >
              <IconButton>
                <p style={{ color: "white" }}>Creat Quiz</p>
              </IconButton>
            </Link> */}

          {/* {role === "Admin" && (
            <Link
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              className="right-side_btn right_side_create"
              to="admin-dashboard"
            >
              <IconButton>
                <p style={{ color: "white" }}>Admin Panel</p>
              </IconButton>
            </Link>
          )}{" "} */}
          {/* {role === "Teacher" && (
            <Link
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              className="right-side_btn right_side_create"
              to="admin-create-quiz"
            >
              <IconButton>
                <p style={{ color: "white" }}>Creat Quiz</p>
              </IconButton>
            </Link>
          )}{" "} */}

          {/* <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              className="right-side_btn right_side_create"
              onClick={handleOpen}
            >
              <IconButton>
                <p style={{ color: "white" }}>Creat Quiz</p>
              </IconButton>
            </Box>
    */}
          {/* <form onSubmit={handleEnter} style={{ display: "flex" }}>
            <Search
              style={{
                backgroundColor: "rgb(240, 240, 242)",
                borderRadius: "30px",
                width: "300px",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon style={{ color: "rgb(71, 64, 218)" }} />
              </SearchIconWrapper>
              <StyledInputBase
                value={search}
                onChange={(e) => handleonchange(e)}
                placeholder="Search Quiz..."
                onBlur={handleBlur}
                inputProps={{ "aria-label": "search" }}
                style={{ fontSize: "12px" }}
              />
            </Search>
          </form> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link className="right-side_btn" to="/">
              <p>Home</p>
            </Link>
            <Link className="right-side_btn" to="/about">
            <div className="dropdown">
               <p className="dropbtn">About</p>
                     <div className="dropdown-content">
                      <Link to="/ourteam">Our Team </Link>
                      <Link to="/Santoshprofile">Dr Santosh</Link>
                        
                        </div>
                        </div>
              {/* <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <p>About</p>
              </Dropdown> */}
            </Link>
            <Link className="right-side_btn" to="/treatments">
              {/* <p>Treatments</p> */}
              <div className="dropdown">
               <p className="dropbtn">Treatments</p>
                     <div className="dropdown-content">
                      <Link to="/generaldentistry">General Dentistry</Link>
                      <Link to="/SmileMakeOver">Smile MakeOver</Link>
                      <Link to="/DentalImplants">Dental Implants</Link>
                      <Link to="/KidsDentistry">Kids Dentistry</Link>
                      <Link to="/SedationDentistry">Sedation Dentistry</Link>
                      <Link to="/Dentures">Dentures</Link>
                      <Link to="/DentalBridgesandCrowns">Dental Bridges / Crowns</Link>
                      <Link to="/ClearAlignersandInvisibleBraces">Clear Aligners / Invisible Braces</Link>
                      <Link to="/OrthodonticTreatment">Orthodontic Treatment</Link>
                      <Link to="/WisdomToothRemoval">Wisdom Tooth Removal</Link>
                      <Link to="/RootCanal">Root Canal</Link>

                        
                        </div>
                        </div>
            </Link>
            <Link className="right-side_btn" to="/testimonials">
              <p>Testimonials</p>
            </Link>
            <Link className="right-side_btn" to="/digital-implants-blog">
             
                <div className="dropdown">
               <p className="dropbtn">Blog</p>
                     <div className="dropdown-content">
                      <Link to="/digital-implants-blog">Dental Implants </Link>
                      <Link to="/Mouthbreathingblog">Mouth breathing</Link>
                        
                        </div>
                        </div>
              {/* <p>Blog</p> */}

            </Link>
            <Link className="right-side_btn" to="/contact">
              <p>Contact</p>
            </Link>
          
            <Link className="right_side_signup" to="/bookanappointment">
                <p style={{ color: "white" }}>Book Appointment</p>
            </Link>
    
        
          </Box>
          <Box sx={{ color: "black", display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <HiBars3 />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="modal_main_box">
            <div className="header_inner-content">
              <div className="header_inner-content-2">Not Authorize</div>
              <div className="header_form">
                <label className="header_label" htmlFor="">
                  You Need to Register as teacher to access this page
                </label>
                <Link
                  to="/signup"
                  className="header_btn"
                  // onClick={handleForgotPassword}
                >
                  Register
                </Link>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
