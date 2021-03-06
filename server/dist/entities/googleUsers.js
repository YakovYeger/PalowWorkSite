"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleUsers = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let googleUsers = class googleUsers extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], googleUsers.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], googleUsers.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], googleUsers.prototype, "familyName", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], googleUsers.prototype, "givenName", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], googleUsers.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], googleUsers.prototype, "premium", void 0);
googleUsers = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], googleUsers);
exports.googleUsers = googleUsers;
//# sourceMappingURL=googleUsers.js.map