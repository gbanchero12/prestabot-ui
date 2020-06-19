import React , { Fragment} from "react";
import PropTypes from "prop-types";
import { Switch, Redirect, Route } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";
import { Typography } from "@material-ui/core";


function Routing(props) {
  const { blogPosts, selectBlog, selectHome, blogInformation } = props;

  
console.log(blogInformation);

  let blogContent = blogInformation === null ? null :  (<div>
    <Fragment>
      <Typography variant="h5" paragraph>
      {blogInformation.Titulo}
      </Typography>
      <Typography paragraph>
       
  
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

  return (
    <Switch>
      {blogInformation !== null ? blogPosts.map(post => (
        <PropsRoute
          /* We cannot use the url here as it contains the get params */
          path={post.url}
          component={BlogPost}
          title={blogInformation.Titulo}
          key={post.title}
          src={post.imageSrc}
          date={post.date}
          content={blogContent}
          otherArticles={blogPosts.filter(blogPost => blogPost.id !== post.id)}
        />
        
      )): null}
      <PropsRoute
        exact
        path="/blog"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      
      )
      <PropsRoute path="/" component={Home} selectHome={selectHome} />)
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired
};

export default Routing;
