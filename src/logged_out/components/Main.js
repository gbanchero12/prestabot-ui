import React, { PureComponent } from "react";
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
    this.fetchBlogPosts();
    this.getInformation(this);
}

  blogPostsMaxUnix = Math.round(new Date().getTime() / 1000);

  

 

  selectHome = () => {
    smoothScrollTop();
    document.title =
      "BotsUruguay - Con nuestro software gestioná tus clientes las 24 horas del día. Brindá una atención personalizada.";
    this.setState({ selectedTab: "Home" });
  };

  selectBlog = () => {
    smoothScrollTop();
    document.title = "BotsUruguay - Blog";
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
      return blogPost;
    });
    this.setState({
      blogPosts
    });
  };

  getInformation = (object) => {
    const apiUrl = encodeURI("https://botsuruguay-web.herokuapp.com/blog");

    fetch(apiUrl, {
  // mode: 'no-cors',
  method: 'GET',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
  },
},
).then(response => {
  console.log(response.body)
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
      
      <div className={classes.wrapper}>
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

      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
