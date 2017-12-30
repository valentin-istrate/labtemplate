'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TrackNumber: {
        type: Sequelize.INTEGER
      },
      FileName: {
        type: Sequelize.STRING
      },
      TrackName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },      
      AlbumId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull:false,
        references: {
          model: 'Albums',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tracks');
  }
};