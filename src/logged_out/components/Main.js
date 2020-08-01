import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import { withStyles } from "@material-ui/core";
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import CookieRulesDialog from "./cookies/CookieRulesDialog";
import CookieConsent from "./cookies/CookieConsent";
import dummyBlogPosts from "../dummy_data/blogPosts";
import DialogSelector from "./register_login/DialogSelector";
import Routing from "./Routing";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import KommunicateChat from "./chat/chat";
import fetch from 'node-fetch';
import { Typography } from "@material-ui/core";

AOS.init({ once: true });

const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden"
  }
});

class Main extends PureComponent {
  state = {
    selectedTab: null,
    mobileDrawerOpen: false,
    blogPosts: [],
    dialogOpen: null,
    cookieRulesDialogOpen: false,
    blogInformation: null,
  };

  componentWillMount() {
    this.getInformation(this);

    this.fetchBlogPosts();

  }

  blogPostsMaxUnix = Math.round(new Date().getTime() / 1000);





  selectHome = () => {
    smoothScrollTop();
    document.title =
      "BotsUruguay";
    this.setState({ selectedTab: "Home" });
  };

  selectBlog = () => {
    smoothScrollTop();
    document.title = "BotsUruguay";
    this.setState({ selectedTab: "Blog" });
  };

  openLoginDialog = () => {
    this.setState({ dialogOpen: "login", mobileDrawerOpen: false });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: null });
  };

  openRegisterDialog = () => {
    this.setState({
      dialogOpen: "register",
      mobileDrawerOpen: false
    });
  };

  openTermsDialog = () => {
    this.setState({ dialogOpen: "termsOfService" });
  };

  handleMobileDrawerOpen = () => {
    this.setState({ mobileDrawerOpen: true });
  };

  handleMobileDrawerClose = () => {
    this.setState({ mobileDrawerOpen: false });
  };

  switchSelectedTab = tab => {
    this.setState({ selectedTab: tab });
  };

  openChangePasswordDialog = () => {
    this.setState({ dialogOpen: "changePassword" });
  };

  fetchBlogPosts = () => {
    /**
     * You would fetch this from the server, however we gonna use the example values from state here
     */

    this.blogPostsMaxUnix = dummyBlogPosts[dummyBlogPosts.length - 1].date;
    const blogPosts = dummyBlogPosts.map(blogPost => {
      let title = blogPost.title;
      title = title.toLowerCase();
      /* Remove unwanted characters, only accept alphanumeric and space */
      title = title.replace(/[^A-Za-z0-9 ]/g, "");
      /* Replace multi spaces with a single space */
      title = title.replace(/\s{2,}/g, " ");
      /* Replace space with a '-' symbol */
      title = title.replace(/\s/g, "-");
      blogPost.url = `/blog/post/${title}`;
      blogPost.params = `?id=${blogPost.id}`;
      console.log(blogPost.content);
      blogPost.content = this.handleContent(blogPost.content);

      return blogPost;
    });
    this.setState({
      blogPosts
    });
  };

  handleContent = async (content) => {
    if (Array.isArray(content)) {
      console.log(content)
      await content.array.forEach(blogInformation => {
        return (
          <div>
            {console.log(blogInformation.Titulo)}
            <Fragment>
              <Typography variant="h5" paragraph>
                {blogInformation.Titulo}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.titulo}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.titulo2}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc2}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.titulo3}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc3}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.titulo4}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc4}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.titulo5}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc5}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.titulo6}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc6}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.tituo7}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc7}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.titulo8}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc8}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.titulo9}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc9}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.titulo10}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc10}
              </Typography>

              <Typography variant="h6" paragraph>
                {blogInformation.listaBeneficios.titulo11}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc11}
              </Typography>

              <Typography paragraph>
                {blogInformation.listaBeneficios.desc12}
              </Typography>

            </Fragment>

          </div>);
      });
    }
  }

  getInformation = (object) => {
    //https://botsuruguay-web.herokuapp.com/blog
    const apiUrl = encodeURI("http://localhost:3000/blog");

    fetch(apiUrl, {
  // mode: 'no-cors',
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
},
).then(response => {
  if(response.ok)
    response.json().then(json => {
      object.setState({
        blogInformation : json
      })
    });
});

    

  }

  handleCookieRulesDialogOpen = () => {
    this.setState({ cookieRulesDialogOpen: true });
  };

  handleCookieRulesDialogClose = () => {
    this.setState({ cookieRulesDialogOpen: false });
  };

  render() {
    const { classes } = this.props;
    const {
      selectedTab,
      mobileDrawerOpen,
      blogPosts,
      dialogOpen,
      cookieRulesDialogOpen,
      blogInformation
    } = this.state;


    return (

      <main className={classes.wrapper}>
        {!cookieRulesDialogOpen && (
          <CookieConsent
            handleCookieRulesDialogOpen={this.handleCookieRulesDialogOpen}
          />
        )}
        <DialogSelector
          openLoginDialog={this.openLoginDialog}
          dialogOpen={dialogOpen}
          onClose={this.closeDialog}
          openTermsDialog={this.openTermsDialog}
          openRegisterDialog={this.openRegisterDialog}
          openChangePasswordDialog={this.openChangePasswordDialog}
        />
        <CookieRulesDialog
          open={cookieRulesDialogOpen}
          onClose={this.handleCookieRulesDialogClose}
        />
        <NavBar
          selectedTab={selectedTab}
          selectTab={this.selectTab}
          openLoginDialog={this.openLoginDialog}
          openRegisterDialog={this.openRegisterDialog}
          mobileDrawerOpen={mobileDrawerOpen}
          handleMobileDrawerOpen={this.handleMobileDrawerOpen}
          handleMobileDrawerClose={this.handleMobileDrawerClose}
        />
        <Routing
          blogPosts={blogPosts}
          blogInformation={blogInformation}
          selectHome={this.selectHome}
          selectBlog={this.selectBlog}
        />
        {console.log(blogInformation)}
        <KommunicateChat />
        <Footer />

      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
