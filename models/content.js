

module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
  }, {
    timestamps: false,
  });
  return Content;
};
