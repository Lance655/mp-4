import getGameInfo from "@/lib/getGameInfo";
import {
    Box,
    Paper,
} from "@mui/material";
import {IGDBGame} from "@/types";
import {Platform} from "@/types";

interface Props {
    params: {
        game: string;
    };
}


export default async function GameSearchPage({ params }: Props) {

    const { game } = await params
    // const gameName = await decodeURIComponent(params.game);

    const gameName = decodeURIComponent(game);

    let results:IGDBGame[] = [];
    try {
        results = await getGameInfo(gameName);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return <p>Error: {err.message}</p>;
        }
        // fallback if it's not an `Error`
        return <p>An unknown error occurred.</p>;
    }

    return (
        <main>
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
                    results.map((game: IGDBGame) => (
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
                                        ? game.platforms.map((p: Platform) => p.name).join(", ")
                                        : null }
                                </Box>
                            </Box>
                            {game.cover && game.cover.url ? (
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
