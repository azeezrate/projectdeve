import React from 'react';

const loadingImg = 'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

const Loading = () => (
  <div className="row justify-content-center align-items-center w-100" style={{ height: '100vh' }}>
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
