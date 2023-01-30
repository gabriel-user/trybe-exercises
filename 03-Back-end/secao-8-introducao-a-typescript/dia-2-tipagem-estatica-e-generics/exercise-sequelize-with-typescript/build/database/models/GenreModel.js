"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Genre extends sequelize_1.Model {
}
;
Genre.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    genre: {
        type: (0, sequelize_1.STRING)(45),
        allowNull: false,
    },
}, {
    timestamps: false,
    modelName: 'genre',
    tableName: 'genres',
    sequelize: _1.default
});
exports.default = Genre;
