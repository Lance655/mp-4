import getGameInfo from "@/lib/getGameInfo";
import {
    Box,
    Paper,
} from "@mui/material";

interface Props {
    params: {
        game: string;
    };
}


export default async function GameSearchPage({ params }: Props) {

    const gameName = decodeURIComponent(params.game);

    let results = [];
    try {
        results = await getGameInfo(gameName);
    } catch (err: any) {
        return <p>Error: {err.message}</p>;
    }

    return (
        <main style={{
            // padding: "1rem",
            // height: "100vh",
        }}>
            <Box sx={{
                padding: "1rem",
                margin: "auto",
                // height: "100vh",
            }}>

                <Box sx=
                         {{ color: "white",
                             fontSize: "1.5rem",
                             marginLeft: "100px",
                             marginBottom: "10px",
                }}>
                    <h1>Results for: {gameName}</h1>
                </Box>


                {results.length === 0 ? (
                    <p>No results found.</p>
                ) : (
                    results.map((game: any) => (
                        <Paper key={game.id} variant="outlined"
                            sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            padding: 4,
                            margin: "auto",
                            marginBottom: "15px",
                            width: "75%",
                            bgcolor: "",
                            borderRadius: 4,
                            borderColor: "#ff4500",
                            borderWidth: "5px",
                        }}>
                            <Box sx={{
                                // padding: 5
                                width: "60%",
                            }}>

                                <h2>{game.name}</h2>
                                <hr/>

                                <Box sx={{
                                    marginTop: 2
                                }}>
                                    {game.summary ? <p>{game.summary}</p> : null}
                                </Box>

                                <Box sx={{
                                    marginTop: 2
                                }}>
                                    Platforms:
                                    {game.platforms?.length
                                        ? game.platforms.map((p: any) => p.name).join(", ")
                                        : null }
                                </Box>
                            </Box>
                            {game.cover ? (
                                <img
                                    src={`https:${game.cover.url.replace("t_thumb", "t_cover_big")}`}
                                    alt="Game Cover"
                                />
                            ) : (
                                <p>No cover available</p>
                            )}
                        </Paper>
                    ))
                )}

            </Box>
        </main>
    );
}
