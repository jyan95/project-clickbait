
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import CONTENT from '../assets/content';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'relative',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingRight: 3,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  contentBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  adBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
    border: 'dashed',
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

const featuredPosts = [
  {
    title: '[ad space]',
    date: 'Nov 12',
    description:
      'ad',
  },
  {
    title: '[ad space]',
    date: 'Nov 12',
    description:
      'ad',
  },
];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

export default function Page1() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h6"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            [sitename]
          </Typography>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
        </Toolbar>
        <main>
          {/* Main featured post */}
            <Typography component="h1" variant="h5" color="inherit" gutterBottom align='center'>
              [very cool clickbait title]
            </Typography>
            <Typography variant="subtitle1" color="inherit" paragraph align='center'>
              [story summary?]
            </Typography>
          {/* End main featured post */}
          <Paper elevation={0} className={classes.adBox}>
            <Typography variant="h6" gutterBottom>
              [ad space]
            </Typography>
            <Typography>
              Etiam porta sem malesuada magna mollis euismod. amet fermentum.
            </Typography>
          </Paper>
          <br/>
          <Paper elevation={0} className={classes.contentBox}>
            <Typography align='left'>
              (story content)
              Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
              amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
              Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
              amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
            </Typography>
          </Paper>
          <br/>
          {/* Sub featured posts */}
          <Grid container spacing={4} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                  <br/>
                  <Paper elevation={0} className={classes.contentBox}>
                    <Typography align='left'>
                      (story content)
                      Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                      amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                      Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                      amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                    </Typography>
                  </Paper>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          <br/>
          {/* End sub featured posts */}
          <Paper elevation={0} className={classes.adBox}>
            <Typography variant="h6" gutterBottom>
              [ad space]
            </Typography>
            <Typography>
              Etiam porta sem malesuada magna mollis euismod. amet fermentum.
            </Typography>
          </Paper>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                more stories
              </Typography>
              {archives.map(archive => (
                <Link display="block" variant="body1" href="#" key={archive}>
                  {archive}
                </Link>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            [ad space]
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            ad
          </Typography>
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
