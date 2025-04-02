import Link from "next/link";
import {
    Box,
} from "@mui/material";

export default function Header() {
    const linkStyling = "p=1 m=2 text-xl hover:underline";

    return (
        <Box sx={{
            bgcolor: "#ff4500",
        }}>
            <header className="flex justify-between items-center h-20">
                <h2 className="text-4xl font-semibold p-4">GameSearch</h2>
                <nav className="p-2 m-4">
                    <Link href="/" className={linkStyling}>
                        Home
                    </Link>
                </nav>
            </header>
        </Box>
    );
}