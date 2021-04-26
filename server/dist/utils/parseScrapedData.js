"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseScrapedData = void 0;
const fs_1 = require("fs");
const papa = require("papaparse");
const readCSV = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    const csvFile = fs_1.readFileSync(filePath);
    const csvData = csvFile.toString();
    return new Promise((resolve) => {
        papa.parse(csvData, {
            header: true,
            complete: (results) => {
                console.log("Complete", results.data.length, "records.");
                resolve(results.data);
            },
        });
    });
});
function parseScrapedData(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield readCSV(fileName);
        return data.map((e) => ({
            companyName: e.CompanyName,
            jobTitle: e.JobTitle,
            location: e.Location,
            category: e.Location,
            jobRequirements: e.JobRequirements,
            link: e.Link
        }));
    });
}
exports.parseScrapedData = parseScrapedData;
//# sourceMappingURL=parseScrapedData.js.map