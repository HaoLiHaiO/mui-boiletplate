import React from "react";
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from "@material-ui/icons";

import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            This is a long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                                                    <Grid item key={card} xs={12} sm={6} md={4}>
                                                    <Card className={classes.card}>
                                                        <CardMedia
                                                        className={classes.cardMedia}
                                                        image="https://source.unsplash.com/random"
                                                        title="Title"
                                                        />
                                                        <CardContent className={classes.cardContent}>
                                                            <Typography gutterBottom variant="h5">
                                                                <Typography>Heading</Typography>
                                                                <Typography>Content description</Typography>
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Button size="small" color="primary">View</Button>
                                                            <Button size="small" color="primary">Edit</Button>
                        
                                                        </CardActions>
                                                    </Card>
                        
                                                </Grid>
                        ))}

                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default App;