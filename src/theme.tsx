import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ECEFF1",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "0.5rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "2px",
          fontWeight: 100,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          alignSelf: "center",
          height: "3rem",
        },
      },
    },
  },
});
