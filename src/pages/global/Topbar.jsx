import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { ColorModeContext, tokens } from "../../styles/theme";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";


const Topbar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" width={"1830px"} justifyContent="space-between" p={2} position= "absolute" zIndex= {2} backgroundColor={colors.primary[400]}>

      {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 SEARCH BAR 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}
      <Box
        display="flex"
        borderRadius="3px"
        backgroundColor={colors.primary[400]}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />

        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>


      {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 ICONS 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}
      <Box display="flex">

        <IconButton onClick={colorMode.toggleColorMode}>
          {
            // by user click toggle UI theme color...
            theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )
          }
        </IconButton>

        <IconButton>
          <NotificationsNoneTwoToneIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>

      </Box>

    </Box>
  )
}

export default Topbar