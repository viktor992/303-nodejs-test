

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Contents', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Contents'),// eslint-disable-line
};
