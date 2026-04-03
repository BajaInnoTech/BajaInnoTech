import { Box, Link, Typography } from '@mui/material';

function Mysteries() {
    return (
        <>
            <br />
            <Typography variant="h3" sx={{ color: "primary.dark"}}>
                Bit Mysteries
            </Typography>
            <br />
            <Typography>At BajaInnoTech we strive to foster our creativity and find innovative ways to further our technical skills recreationally, we provide this as open source content. This can be seen at our companion leisure site: </Typography>
            <br />
            <Box justifySelf={"center"}>
                <Link href="https://bajainnotech.github.io/bit-mysteries/" fontSize={45} fontStyle={"italic"}>BIT-Mysteries</Link>
            </Box>            
        </>
    );
}

export default Mysteries;