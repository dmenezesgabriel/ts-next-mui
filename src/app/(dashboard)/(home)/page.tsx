import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Filter } from "./filter";

export default function Home() {
  return (
    <Box
      sx={{
        p: 3,
      }}
      component="main"
    >
      <Box>
        <Typography variant="h4" gutterBottom>
          Financial Dashboard
        </Typography>
      </Box>

      <Box>
        <Card
          variant="outlined"
          sx={{
            border: "0.5px solid background.default",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Filter />
              <Filter />
              <Filter />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
