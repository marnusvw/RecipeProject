"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Adam",
        lastName: "Sandler",
        email: "adam@thesand.com",
        password: "adam123",
      },
      {
        firstName: "Mike",
        lastName: "Wazowski",
        email: "thewow@monstersinc.com",
        password: "bigBadM0nster",
      },
      {
        firstName: "Stitch",
        lastName: "sixTwoSix",
        email: "fluffyMondster@unitedgalacticfec.space",
        password: "soCuteAndFluffy",
      },
      {
        firstName: "Bob",
        lastName: "Minion",
        email: "bobTheBest@minions.com",
        password: "BananaL0ver",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
