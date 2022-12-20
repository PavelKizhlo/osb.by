const checkAuth = ({ admin, password }) => {
  return (
    admin === process.env.SITE_ADMIN && password === process.env.SITE_ADMIN_PASS
  );
};

module.exports = checkAuth;
