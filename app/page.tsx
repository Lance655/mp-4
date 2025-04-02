// app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button,
    TextField,
    Container,
    Box,
    Paper,
} from "@mui/material";


export default function HomePage() {
  const [gameName, setGameName] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // const encodedGame = encodeURIComponent(gameName);
    const encodedGame = encodeURIComponent(gameName);

    router.push(`/${encodedGame}`);
  }

  return (
    <Container maxWidth="sm">
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                flexDirection: "column",
            }}
        >
            <Paper variant="outlined"
                   sx={{ padding: 4,
                       width: "100%",
                       bgcolor: "orange",
                       borderRadius: 4,
                    }}
            >
                <h1>Search for a Game</h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="filled"
                        sx={{ backgroundColor: "white", width: "100%" }}
                        placeholder="e.g. Minecraft"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                    />

                    <Box display="flex" justifyContent="center">
                        <Button
                            sx={{ width: "80px", margin: "1rem"}}
                            variant="contained"
                            type="submit"
                        >
                          Search
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>

      </Container>
  );
}
