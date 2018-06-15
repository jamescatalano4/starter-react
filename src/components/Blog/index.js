import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Hero from '../shared/Hero';

// Since this component is simple and static, there's no parent container for it.
const BlogPage = (props) => {
  return (
    <Fragment>
      <Hero title="Blog" description="Add your content below." textAlign="left" />
      <div className="row">
        <p>
          {props.blogs}
        </p>
      </div>
    </Fragment>
  );
};

BlogPage.propTypes = {
  blogs: PropTypes.string.isRequired,
};

BlogPage.defaultProps = {
  blogs:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        + 'Nulla quis varius elit. Vestibulum vel pellentesque lectus. '
        + 'Mauris vitae rutrum sapien, in scelerisque metus. '
        + 'Duis eget ullamcorper ex, non consectetur orci. '
        + 'Sed et diam massa. Donec nec purus ex. '
        + 'Nunc diam dui, tempus ut blandit nec, aliquam vitae elit.',
};

export default BlogPage;
